const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const Router = require('@koa/router');
const Static = require('koa-static');

const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = fs.readFileSync(path.resolve(__dirname, './src/index.html'), 'utf-8');
})

app.use(Static(__dirname + './src'));
app.use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
