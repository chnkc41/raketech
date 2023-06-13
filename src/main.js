import Vue from "vue";
import App from "./App.vue";
import routes from "./routers/router";
import VueRouter from "vue-router";
import VTooltip from "v-tooltip";
import "./assets/css/style.css";
import "boxicons";

Vue.use(VTooltip);

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VTooltip);

const router = new VueRouter({
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
