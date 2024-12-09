import { createApp } from "vue"
// import "./style.css"
// import App from "./App1.vue"
import App from "./AppNew.vue";
import router from "./router/index.js";




const APPInstance = createApp(App);
APPInstance.use(router).mount("#app");
