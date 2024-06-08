import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

const vuetify = createVuetify({
    components,
    directives,
    ssr: true,
})

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
