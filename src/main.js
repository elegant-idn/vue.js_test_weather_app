import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import axios from "axios";

//Charts
import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";

//Toast notifications
import Toaster from "@meforma/vue-toaster";

//Animations
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ duration: 1000 });

const app = createApp(App)
  .use(router)
  .use(store)
  .use(VueChartkick)
  .use(Toaster);

app.config.globalProperties.$axios = axios;

// APIs
app.config.globalProperties.$locationApi = `https://api.opencagedata.com/geocode/v1/json?key=5922ef3a5f7f4e3dbefca4e6ebd5f0ff&limit=1&no_annotations=1&q=`;
app.config.globalProperties.$weatherApi =
  "https://api.openweathermap.org/data/2.5/";

app.config.globalProperties.$apikey = "134bd9b9b993cf7667161a4f3dd2b022";

app.mount("#app");
