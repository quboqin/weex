import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './index.css'

import 'vant/lib/index.css'
import { Search, Tab, Tabs, Field, CellGroup, Button } from 'vant'

const app = createApp(App)

app.use(router)

app.use(Search).use(Tab).use(Tabs).use(Field).use(CellGroup).use(Button)

app.mount('#app')
