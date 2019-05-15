import Vue from "vue";
import Router from "vue-router";
import Speakers from "./views/Speakers.vue";
import Main from "./views/Main.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Speakers',
      name: 'Speakers',
      component: Speakers
    },
    {
      path: '/',
      name: 'main',
      component: Main
    }
  ]
});
