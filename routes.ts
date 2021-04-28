import { Bot } from "./bot.ts";
import { adapterFactory, engineFactory, Router, viewEngine, send, cuid } from "./deps.ts";

const ejsEngine = engineFactory.getEjsEngine();
const oakAdapter = adapterFactory.getOakAdapter();


const router = new Router();
export const ve = viewEngine(oakAdapter, ejsEngine, {
    viewRoot: "./views",
    viewExt: ".ejs"
});
router.use(ve)

let bots: Bot[] = [
    {
        name: "Test 1",
        id: cuid(),
        file: "testbot",
        online: true,
    },
    {
        name: "Test 2",
        id: cuid(),
        file: "testbot2",
        online: false,
    },
]

router.get('/', (ctx) => {
    ctx.render('index', { bots })
});

router.get<{id: string}>('/bots/:id', (ctx) => {
    ctx.render("bot", { id: ctx.params.id });
})

router.get('/bots/new', (ctx) => {

})

router.get('/css/tailwind.css', async (ctx) => {
    await ctx.send({
        root: `${Deno.cwd()}/static`,
    })
});

export default router;
