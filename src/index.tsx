import { Hono } from "hono"
import { serveStatic } from "hono/cloudflare-workers"
import { Main } from "./main"

const app = new Hono()
app.get("/", (c) => c.text("Hello World!"))
app.get("/test", (c) => {
  return c.html(<Main />)
})
app.use("/static/*", serveStatic({ root: "./" }))
app.use("/favicon.ico", serveStatic({ path: "./favicon.ico" }))

export default app
