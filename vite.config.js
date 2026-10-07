import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// In development there is no Worker or CI output locally, so the pipeline API
// and the metrics files are read from production.
const production = { target: "https://chjuca.dev", changeOrigin: true };

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": production,
      "/metrics.json": production,
      "/metrics-history.json": production,
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
    coverage: {
      provider: "v8",
      include: ["src/**/*.{js,jsx}", "worker/**/*.js"],
      exclude: ["**/*.test.{js,jsx}", "src/test/**", "src/main.jsx"],
      reporter: ["text-summary", "json-summary"],
    },
  },
});
