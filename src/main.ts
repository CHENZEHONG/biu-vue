import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from './utils/request';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

// new Vue({
//     router,
//     render: (h) => h(App),
// }).$mount('#app');

export function createApp() {
    const app = new Vue({
        router,
        store,
        render: h => h(App)
    });
    return {app};
}
