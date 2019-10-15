import Vue from 'vue';
import Router from 'vue-router';
import NotFound from './views/404.vue';
import PianoPC from './views/PianoPC.vue'

Vue.use(Router);

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: PianoPC
        },
        {
            path: '*',
            component: NotFound
        },

    ],
});
