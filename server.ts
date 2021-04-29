import { Application, coffee } from "./deps.ts";
import router, { ve } from "./routes.ts";
const app = new Application()

app.use(ve);

app.use(router.routes());

app.use(async (ctx) => {
    await ctx.render('404');
})


await app.listen({ port: coffee.default.get('port').number() });