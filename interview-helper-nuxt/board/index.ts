import { defineNuxtModule } from '@nuxt/kit';
import { resolve } from 'path';

export default defineNuxtModule({
    meta: {
        name: 'board',
        configKey: 'board',
    },

    setup(moduleOptions, nuxt) {
        const themeDir = resolve(__dirname, '..');

        nuxt.hook('pages:extend', (pages) => {
            pages.push(
                {
                    name: 'board-list',
                    path: '/board/list',
                    file: resolve(themeDir, 'board/pages/BoardListPage.vue'),
                },
                {
                    name: "board-read",
                    path: "/board/read/:id",
                    file: resolve(themeDir, "board/pages/BoardReadPage.vue")
                }
            );
        });

        nuxt.hook('imports:dirs', (dirs) => {
            dirs.push(resolve(__dirname, 'store'));
        });
    },
});