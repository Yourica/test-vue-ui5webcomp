import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";
setTheme("sap_fiori_3");

const app = createApp(App)

app.use(router)
app.mount('#app')