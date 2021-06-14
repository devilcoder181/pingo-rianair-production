import Vuex from "vuex";
import * as auth from "./modules/auth";
import * as about from "./modules/about";
import * as banner from "./modules/banner";
import * as assistance from "./modules/assistance";
import * as programs from "./modules/programs";
import * as testimonials from "./modules/testimonials";
import * as contact from "./modules/contact";
import * as gallery from "./modules/gallery";
import * as enquiry from "./modules/enquiry";
import * as social from "./modules/social";
import * as loader from "./modules/loader";
import * as alert from "./modules/alertMessages";
import * as seo from "./modules/seo";

const createStore = () => {
  return new Vuex.Store({

    modules: {
      auth,
      about,
      assistance,
      programs,
      testimonials,
      contact,
      enquiry,
      gallery,
      social,
      banner,
      loader,
      alert,
      seo
    }
  })
}
export default createStore;
