const Koa = require('koa')
const {initializeLogger, getLogger} = require('../core/logging')
const config = require('config'); 
const bodyParser = require('koa-bodyparser');
const installRest = require('../rest');
const koaCors = require('@koa/cors');

const NODE_ENV = config.get('env'); 
const LOG_LEVEL = config.get('log.level'); 
const LOG_DISABLED = config.get('log.disabled'); 

const CORS_ORIGINS = config.get('cors.origins');
const CORS_MAX_AGE = config.get('cors.maxAge');

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()



initializeLogger({
  level: LOG_LEVEL,
  disabled: LOG_DISABLED,
  defaultMeta: {
    NODE_ENV,
  },
});

const app = new Koa();

app.use(
  koaCors({
    origin: (ctx) => {
      if (CORS_ORIGINS.indexOf(ctx.request.header.origin) !== -1) {
        return ctx.request.header.origin;
      }
      //Not a valid domain at this point, let's return the first valid as we should return a string
      return CORS_ORIGINS[0];
    },
    allowHeaders: ['Accept','Content-Type', 'Authorization'],
    maxAge: CORS_MAX_AGE,
  })
);

app.use(bodyParser());

installRest(app)

async function main() {
  const allUsers = await prisma.gebruiker.findMany()
  console.log(allUsers)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

app.listen(9000, () => {
  getLogger().info('Server listening on http://localhost:9000');
});