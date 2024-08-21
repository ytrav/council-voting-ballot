import './style/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VWave from 'v-wave'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VWave, {})

app.mount('#app')
