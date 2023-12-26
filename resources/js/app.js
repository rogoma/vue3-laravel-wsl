import './bootstrap';

import { createApp } from 'vue';

import Home from './components/Home.vue'

import Land from './components/Land.vue'

const app = createApp({})

app.component('Home', Home);
app.component('Land', Land);
app.mount('#app');