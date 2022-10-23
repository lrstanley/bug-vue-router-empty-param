import AutoImport from "unplugin-auto-import/vite"
import { VueRouterAutoImports } from "unplugin-vue-router"
import VueRouter from "unplugin-vue-router/vite"
import { fileURLToPath, URL } from "url"
import { defineConfig } from "vite"
import Inspect from "vite-plugin-inspect"
import Vue from "@vitejs/plugin-vue"

export default defineConfig({
  clearScreen: false,
  build: {
    sourcemap: true,
  },

  plugins: [
    VueRouter({
      dataFetching: true,
      routesFolder: [
        // can add multiple routes folders
        {
          src: "src/pages",
          // can even add params
          // path: ':lang/',
        },
        {
          src: "src/features/**/routes",
        },
        {
          src: "src/docs",
          path: "docs/:lang/",
        },
      ],
      logs: true,
      // getRouteName: getPascalCaseRouteName,
      exclude: [
        "ignored",
        "**/__*",
        "**/__**/*",
        // resolve(__dirname, './src/pages/ignored'),
        //
        // './src/pages/**/*.spec.ts',
      ],
    }),
    Vue({}),
    AutoImport({
      imports: [VueRouterAutoImports],
    }),
    Inspect(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
