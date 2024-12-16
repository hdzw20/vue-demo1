import { createApp } from "vue"
// import "./style.css"
// import App from "./App1.vue"
import App from "./AppNew.vue";
import router from "./router/index.js";
import "ant-design-vue/dist/reset.css";
import antdv from "ant-design-vue"


const APPInstance = createApp(App);
APPInstance.use(router).use(antdv).mount("#app");
