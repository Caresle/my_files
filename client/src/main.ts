import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import pinia from './store/pinia'
import router from './router/router'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
