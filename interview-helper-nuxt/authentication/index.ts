import { defineNuxtModule } from "@nuxt/kit";
import { resolve } from "path";

export default defineNuxtModule({
    meta: {
        name: "authentication",
        configKey: "authentication",
    },
    setup(moduleOptions, nuxt) {
        const themeDir = resolve(__dirname, "..");

        nuxt.hook("pages:extend", (pages) => {
            pages.push({
                name: "GoogleRedirection",
                path: "/oauth/google/google-access-token",
                file: resolve(themeDir, "authentication/pages/GoogleRedirection.vue"),
            })
        })

        nuxt.hook("imports:dirs", (dirs) => {
            dirs.push(resolve(__dirname, "stores"))
        })
    }
})