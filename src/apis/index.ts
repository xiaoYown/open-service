import client from './client';

const Router = require('koa-router');

const router = new Router({ prefix: '/api' });

router.use('/client', client.routes(), client.allowedMethods());

export default router;
