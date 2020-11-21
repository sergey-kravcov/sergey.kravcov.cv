import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'socicon/css/socicon.css';

const app = createApp(App)
    .use(store)
    .use(router);

app.mount('#app');
