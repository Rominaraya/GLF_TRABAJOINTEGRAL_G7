require('./bootstrap');
import 'bootstrap/dist/js/bootstrap.bundle.min';
window.vis = require('vis').default;
import Vue from 'vue'
require('sweetalert');
window.FileSaver = require('file-saver').default;
window.fs = require('fs-web').default;
window.$ = window.jQuery= require('jquery').default;


Vue.component('navbar', require('./components/navbar.vue').default);
Vue.component('home', require('./components/HomeComponent.vue').default);
Vue.component('integral', require('./components/IntegralComponent.vue').default);

const app = new Vue({
    el: '#app',
});