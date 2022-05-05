import * as Koa from 'koa';
import router from './apis/index';

const cors = require('@koa/cors');

const logger = require('koa-logger');
const KoaBody = require('koa-body');

const app = new Koa();

function start(port: number): void {
  app.use(
    cors({
      'Access-Control-Allow-Origin': '*',
    })
  );
  app.use(logger());
  app.use(
    KoaBody({
      multipart: true,
      formidable: {
        maxFileSize: 1000 * 1024 * 1024,
      },
      patchKoa: true,
    })
  );
  app.use(router.routes());
  app.listen(port, () => {});
}

start(12010);
