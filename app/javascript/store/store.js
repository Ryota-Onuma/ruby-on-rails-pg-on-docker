import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import http from "./modules/http";
import user from "./modules/user";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    http,
    user,
  },
});

export default store;
