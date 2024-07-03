let gebruikers =  [
  {
   id: 1,
   naam: 'Verhaeghe Ewald',
   straat: 'Brugsken',
   huisnummer: '103',
   postcode: '9100',
   stad: 'Sint-Niklaas' 
  },

  {
    id: 2,
    naam: 'Rendon Alejandra',
    straat: 'Brugsken',
    huisnummer: '104',
    postcode: '9100',
    stad: 'Sint-Niklaas' 
   },

   {
    id: 3,
    naam: 'De Poes Ona',
    straat: 'Roeselarestraat',
    huisnummer: '40',
    postcode: '8600',
    stad: 'Esen' 
   },
];

let jobs = [
  {
    id: 1,
    naam: 'Tuinman',
    bedrijf: 'De groene vinger',
    salaris: '5000/maand'
  }, 

  {
    id: 2,
    naam: 'Vuilnisman',
    bedrijf: 'De grijze vinger',
    salaris: '4000/maand'
  },

  {
    id: 3,
    naam: 'Afwasser',
    bedrijf: 'De vuile vinger',
    salaris: '4500/maand'
  },
];

let vaardigheden = [
  {
    id: 1, 
    naam: 'Javascript',
    jaarErvaring: '5 jaar'
  },

  {
    id: 2, 
    naam: 'SQL',
    jaarErvaring: '3 jaar'
  },

  {
    id: 3, 
    naam: 'Java',
    jaarErvaring: '5 jaar'
  },
];

let diplomas = [
  {
    id: 1,
    naam: 'Handelswetenschappen',
    afstudeerjaar: '2020'
  },

  {
    id: 2,
    naam: 'Toegepaste informatica',
    afstudeerjaar: '2019'
  },

  {
    id: 3,
    naam: 'Bijbelstudie',
    afstudeerjaar: '2019'
  },
]
  
module.exports = {gebruikers, vaardigheden, jobs, diplomas}