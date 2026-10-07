// Cloudflare Worker for chjuca.dev. Static files are served by the assets
// binding; this script only answers /api/*.
import { handlePipeline, json } from "./pipeline.js";

export default {
  async fetch(request, env, ctx) {
    const { pathname } = new URL(request.url);
    if (pathname === "/api/pipeline") return handlePipeline(request, env, ctx);
    if (pathname.startsWith("/api/")) return json({ error: "not_found" }, 404, 0);
    return env.ASSETS.fetch(request);
  },
};
