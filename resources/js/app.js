require('./bootstrap');
import 'bootstrap/dist/js/bootstrap.bundle.min';
window.vis = require('vis');
window.Vue = require('vue').default;
require('sweetalert');
window.FileSaver = require('file-saver');
window.fs = require('fs-web');
window.$ = window.jQuery= require('jquery');


Vue.component('navbar', require('./components/navbar.vue').default);
Vue.component('home', require('./components/HomeComponent.vue').default);
Vue.component('integral', require('./components/IntegralComponent.vue').default);

const app = new Vue({
    el: '#app',
});