const Router = require('@koa/router');
const installGebruikerRouter = require('./gebruiker');
const installHealthRouter = require('./health')

/**
 * Install all routes in the given Koa application.
 *
 * @param {Koa} app - The Koa application.
 */

module.exports = (app) => {
  const router = new Router({
    prefix: '/api',
  });

  installGebruikerRouter(router);
  installHealthRouter(router);
  
  app.use(router.routes())
     .use(router.allowedMethods());
}