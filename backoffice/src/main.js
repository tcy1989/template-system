import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index.js'
import './assets/styles/base.css'
import './assets/styles/sidebar.css'
import './assets/styles/topbar.css'
import './assets/styles/theme-view.css'
import './assets/styles/preview-panel.css'
import './assets/styles/layout-view.css'
import './assets/styles/typography-view.css'
import './assets/styles/clocking-view.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
