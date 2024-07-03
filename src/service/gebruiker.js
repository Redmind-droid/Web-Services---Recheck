let {gebruikers, vaardigheden, jobs, diplomas} = require('../data/mock_data');
const {getLogger} = require('../core/logging')

const getAll = () => {
  return {items: gebruikers, count: gebruikers.length}
};

const getById = (id) => {
  return gebruikers.find((t) => t.id === id);
}

const create = ({naam, straat, huisnummer, postcode, stad}) => {
  let bestaandeGebruiker;
  if (naam) {
    bestaandeGebruiker = gebruikers.find((naam) => gebruikers.naam === naam);

    if(bestaandeGebruiker) {
      getLogger().error(`Gebruiker ${bestaandeGebruiker} bestaat al`)
    }
  }

  if (typeof user === 'string') {
    user = {id: Math.floor(Math.random() * 100000), name: user};
  }
  const maxId = Math.max(...gebruikers.map((i) => i.id));

  const newGebruiker = {
    id: maxId + 1,
    naam,
    straat,
    huisnummer,
    postcode,
    stad,
  };
  gebruikers.push(newGebruiker);
  return newGebruiker;
};

const updateById = (id, {naam, straat, huisnummer, postcode, stad}) => {
  const index = gebruikers.findIndex((t) => t.id === id);
  let bestaandeGebruiker;
  if(!index) {
      getLogger().error(`Gebruiker ${index} bestaat niet`)
    };
  
  const updatedGebruiker = {
    ...gebruikers[index], 
    naam,
    straat,
    huisnummer,
    postcode,
    stad
  };
  gebruikers[index] = updatedGebruiker;
  return updatedGebruiker;

}

const deleteById = (id) => {
  const index = gebruikers.findIndex((t) => t.id === id);
  gebruikers.splice(index,1)
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};