import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './index.css'

import 'vant/lib/index.css'
import { Search, Tab, Tabs } from 'vant'

const app = createApp(App)

app.use(router)

app.use(Search).use(Tab).use(Tabs)

app.mount('#app')
