import Vue from 'vue';
import HelloWorld from './hello-world.vue';

const hello = Vue.prototype.$hello = new Vue(HelloWorld).$mount()

export default hello;
