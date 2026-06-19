import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/styles/base.css'
import './assets/styles/header.css'
import './assets/styles/sidebar.css'
import './assets/styles/hero-banner.css'
import './assets/styles/game-section.css'
import './assets/styles/home-view.css'
import './assets/styles/footer.css'
import './assets/styles/cloak-view.css'
import './assets/styles/cloak-view2.css'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
