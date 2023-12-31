import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

const pinia = createPinia();
createApp(App).use(router).mount("#app");

App.use(pinia).mount("#app");
