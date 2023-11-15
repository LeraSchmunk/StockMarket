import router from "./router";

import ('./bootstrap');

import { createApp } from 'vue'
// import router from ".";
import App from './App.vue'

createApp(App).use(router).mount("#app")
