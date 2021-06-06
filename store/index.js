import Vuex from "vuex";
import * as auth from "./modules/auth";
import * as about from "./modules/about";
import * as loader from "./modules/loader";
import * as alert from "./modules/alertMessages";

const createStore = () => {
  return new Vuex.Store({

    modules: {
      auth,
      about,
      loader,
      alert
    }
  });
};


export default createStore;
