import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import VueGtag from "vue-gtag";

createApp(App)
    .use(Quasar, quasarUserOptions)
    .use(router)
    .use(VueGtag, {
        config: { id: process.env.VUE_APP_GA_ID }
    })
    .mount('#app')
