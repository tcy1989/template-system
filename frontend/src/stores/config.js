import { defineStore } from 'pinia'
import { themeApi } from '@/api/index.js'

const DEFAULTS = {
  colors: {
    primary: '#9FA1FF',
    secondary: '#B5BAFF',
    accent: '#AEE2FF',
    bgTint: '#D9F9DF',
  },
  displayMode: 'dark',
  sections: [
    { id: 'hero',           visible: true,  order: 0 },
    { id: 'promo-banners',  visible: true,  order: 1 },
    { id: 'feature-cards',  visible: true,  order: 2 },
    { id: 'inhouse-games',  visible: true,  order: 3 },
    { id: 'hot-new-games',  visible: true,  order: 4 },
    { id: 'table-games',    visible: true,  order: 5 },
    { id: 'provably-fair',  visible: true,  order: 6 },
    { id: 'providers',      visible: true,  order: 7 },
  ],
}

export const useConfigStore = defineStore('config', {
  state: () => ({
    colors: { ...DEFAULTS.colors },
    displayMode: DEFAULTS.displayMode,
    sections: [...DEFAULTS.sections],
    cloaking: { enabled: false, pageConfigured: false, pageLabel: '', selectedPage: 'webteck', cloakMethod: 'template', redirectUrl: '', templateCtaUrl: '' },
    loaded: false,
  }),

  getters: {
    cloakActive: (state) => state.cloaking.enabled,
    orderedSections: (state) =>
      [...state.sections].sort((a, b) => a.order - b.order),
    visibleSections: (state) =>
      [...state.sections].sort((a, b) => a.order - b.order).filter(s => s.visible),
  },

  actions: {
    applyToDOM() {
      const root = document.documentElement
      root.style.setProperty('--color-primary',   this.colors.primary)
      root.style.setProperty('--color-secondary',  this.colors.secondary)
      root.style.setProperty('--color-accent',     this.colors.accent)
      root.style.setProperty('--color-bg-tint',    this.colors.bgTint)

      const mode = this.displayMode === 'system'
        ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        : this.displayMode
      root.setAttribute('data-mode', mode)
    },

    async loadConfig() {
      try {
        const data = await themeApi.getConfig()
        if (data.colors)      this.colors = data.colors
        if (data.displayMode) this.displayMode = data.displayMode
        if (data.sections)  this.sections = data.sections
        if (data.cloaking)  this.cloaking = { ...this.cloaking, ...data.cloaking }
      } catch {
        // backend not connected — use defaults
      } finally {
        this.loaded = true
        this.applyToDOM()
      }
    },
  },
})
