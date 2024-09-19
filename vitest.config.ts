import { resolve } from "path"
import solid from "vite-plugin-solid"
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
  },
  plugins: [solid()],
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
    },
    conditions: ["development", "browser"],
  },
})
