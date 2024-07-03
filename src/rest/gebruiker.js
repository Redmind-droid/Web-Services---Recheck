const Router = require('@koa/router');
const gebruikerService = require('../service/gebruiker')

const getAllTransactions = async (ctx) => {
  ctx.body = gebruikerService.getAll();
};

const createGebruiker = async (ctx) => {
  const nieuweGebruiker = gebruikerService.create( {
    ...ctx.request.body,
    huisnummer: Number(ctx.request.body.huisnummer),
    postcode: Number(ctx.request.body.postcode),
  });
  ctx.body = nieuweGebruiker;
};

const getGebruikerById = async (ctx) => {
  ctx.body = gebruikerService.getById(Number(ctx.params.id));
};

const updateGebruiker = async (ctx) => {
  ctx.body = gebruikerService.updateById(Number(ctx.params.id), {
    ...ctx.request.body,
    huisnummer: Number(ctx.body.request.huisnummer),
    postcode: Number(ctx.body.request.postcode),
  });
};

const deleteGebruiker = async (ctx) => {
  ctx.body = gebruikerService.deleteById(Number(ctx.params.id));
  ctx.status = 204
};

/**
 * Install transaction routes in the given router.
 *
 * @param {Router} app - The parent router.
 */

module.exports = (app) => {
  const router = new Router({
    prefix: '/gebruikers',  
  });

  router.get('/', getAllTransactions);
  router.post('/', createGebruiker);
  router.get('/:id', getGebruikerById);
  router.put('/:id', updateGebruiker);
  router.delete('/:id', deleteGebruiker);

  app.use(router.routes())
     .use(router.allowedMethods());
};