import Vue from 'vue';
import Router from 'vue-router';
import Login from "./views/Login.vue";
import NotFound from './views/404.vue';
import Game from './views/GameContainer.vue'
import PianoPC from './views/PianoPC.vue'

Vue.use(Router);

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        // {
        //     path: '/game',
        //     component: Game
        // },
        // {
        //     path: '/login',
        //     name: 'Login',
        //     component: Login,
        // },
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
