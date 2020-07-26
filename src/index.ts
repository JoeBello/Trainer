import Koa from "koa";
import KoaRouter from "koa-router";
import json from "koa-json";
import logger from "koa-logger";

const app = new Koa();
const router = new KoaRouter();

router.get("/", async (ctx, next) => {
	ctx.body = { msg: "response" };

	await next();
});

app.use(json());
app.use(logger());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
