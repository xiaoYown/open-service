const router = require("koa-router")();

router.get("/get", async (ctx: any) => {
  ctx.body = {
    code: 0,
    data: ctx.request.query,
  };
});

router.post("/post", async (ctx: any) => {
  ctx.body = {
    code: 0,
    data: ctx.request.body,
  };
});

export default router;
