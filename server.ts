import { Application } from "./deps.ts";
import router, { ve } from "./routes.ts";
const app = new Application()

app.use(ve);

app.use(router.routes());

app.use(async (ctx) => {
    await ctx.render('404');
})

console.log(`🌳 oak server running at http://localhost:2345/ 🌳`);

await app.listen({ port: 2345 });