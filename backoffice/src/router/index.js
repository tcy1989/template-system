import { createRouter, createWebHistory } from 'vue-router'
import ThemeView from '@/views/ThemeView.vue'
import LayoutView from '@/views/LayoutView.vue'
import TypographyView from '@/views/TypographyView.vue'
import MediaView from '@/views/MediaView.vue'
import PagesView from '@/views/PagesView.vue'
import SettingsView from '@/views/SettingsView.vue'
import ClockingView from '@/views/ClockingView.vue'

const routes = [
  { path: '/', redirect: '/theme' },
  { path: '/theme',      component: ThemeView,      meta: { label: 'Theme',      section: 'Appearance' } },
  { path: '/layout',     component: LayoutView,     meta: { label: 'Layout',     section: 'Appearance' } },
  { path: '/typography', component: TypographyView, meta: { label: 'Typography', section: 'Appearance' } },
  { path: '/media',      component: MediaView,      meta: { label: 'Media',      section: 'Content' } },
  { path: '/pages',      component: PagesView,      meta: { label: 'Pages',      section: 'Content' } },
  { path: '/clocking',   component: ClockingView,   meta: { label: 'Clocking',   section: 'Tools' } },
  { path: '/settings',   component: SettingsView,   meta: { label: 'Settings',   section: '' } },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
