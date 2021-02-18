require('./bootstrap');


import Vue from 'vue';
import VueRouter from 'vue-router';

import router from './router/index';
import store from './store/index';
import App from './app.vue'

Vue.use(VueRouter);

import Element from 'element-ui'
import './styles/element-variables.scss'

Vue.use(Element)

const app = new Vue({
    el: '#app',
    router,
    store,
    components: { App }
});
