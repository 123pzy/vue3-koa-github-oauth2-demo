import { createApp } from 'vue';
import './style.css';
import { router } from './routes.js';

import App from './App.vue';
const app = createApp(App);
app.use(router);
app.mount('#app');
