import { createApp } from "vue"
import { createRouter, createWebHistory, RouterView, setupDataFetchingGuard } from "vue-router/auto"

const router = createRouter({
  history: createWebHistory(),
  extendRoutes: (routes) => {
    console.log(routes)
    return routes
  },
})

setupDataFetchingGuard(router)

const app = createApp(RouterView)
app.use(router)
app.mount("#app")
