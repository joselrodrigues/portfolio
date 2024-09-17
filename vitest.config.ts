import { resolve } from "path"
import solid from "vite-plugin-solid"
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
  },
  plugins: [solid()],
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
    },
    conditions: ["development", "browser"],
  },
})
