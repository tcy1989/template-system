import { defineStore } from 'pinia'
import { themeApi, sectionsApi } from '@/api/index.js'

const DEFAULT_COLORS = {
  primary: '#9FA1FF',
  secondary: '#B5BAFF',
  accent: '#AEE2FF',
  bgTint: '#D9F9DF',
}

const DEFAULT_SECTIONS = [
  { id: 'hero',          name: 'Hero Banner',         icon: 'ti-home',              visible: true },
  { id: 'promo-banners', name: 'Promo Banners',        icon: 'ti-gift',              visible: true },
  { id: 'feature-cards', name: 'Feature Cards',        icon: 'ti-star',              visible: true },
  { id: 'game-filters',  name: 'Game Filters / Stats', icon: 'ti-adjustments',       visible: true },
  { id: 'inhouse-games', name: 'In-House Games',       icon: 'ti-device-gamepad-2',  visible: true },
  { id: 'hot-new-games', name: 'Hot New Games',        icon: 'ti-flame',             visible: true },
  { id: 'table-games',   name: 'Best Table Games',     icon: 'ti-cards',             visible: true },
  { id: 'provably-fair', name: 'Provably Fair Games',  icon: 'ti-shield-check',      visible: true },
  { id: 'providers',     name: 'Providers',            icon: 'ti-building-store',    visible: true },
]

const PRESETS = [
  { name: 'Violet', primary: '#9FA1FF', secondary: '#B5BAFF', accent: '#AEE2FF', bgTint: '#D9F9DF' },
  { name: 'Rose',   primary: '#FF9FAA', secondary: '#FFB5BA', accent: '#FFDAAE', bgTint: '#FFD9F9' },
  { name: 'Sage',   primary: '#6BBF8A', secondary: '#96D4A8', accent: '#AEE2C8', bgTint: '#D9F9E4' },
  { name: 'Sky',    primary: '#7BBFFF', secondary: '#A5D0FF', accent: '#C8E8FF', bgTint: '#D9EEFF' },
  { name: 'Amber',  primary: '#FFB84D', secondary: '#FFCC80', accent: '#FFE0A0', bgTint: '#FFF3D9' },
]

export const useThemeStore = defineStore('theme', {
  state: () => ({
    colors: { ...DEFAULT_COLORS },
    displayMode: 'light',
    sections: DEFAULT_SECTIONS.map((s, i) => ({ ...s, order: i })),
    cloaking: {
      enabled: false,
      pageConfigured: false,
      pageLabel: '',
      selectedPage: 'webteck',
      cloakMethod: 'template',
      redirectUrl: '',
    },
    hasUnsavedChanges: false,
    isSaving: false,
    saveError: null,
    isLoading: false,
    presets: PRESETS,
  }),

  getters: {
    visibleSections: (state) =>
      state.sections.filter((s) => s.visible),
    orderedSections: (state) =>
      [...state.sections].sort((a, b) => a.order - b.order),
  },

  actions: {
    updateColor(key, value) {
      this.colors[key] = value
      this.hasUnsavedChanges = true
    },

    applyPreset(preset) {
      this.colors = { primary: preset.primary, secondary: preset.secondary, accent: preset.accent, bgTint: preset.bgTint }
      this.hasUnsavedChanges = true
    },

    setDisplayMode(mode) {
      this.displayMode = mode
      this.hasUnsavedChanges = true
    },

    updateSections(sections) {
      this.sections = sections.map((s, i) => ({ ...s, order: i }))
      this.hasUnsavedChanges = true
    },

    toggleSection(id) {
      const section = this.sections.find((s) => s.id === id)
      if (section) {
        section.visible = !section.visible
        this.hasUnsavedChanges = true
      }
    },

    toggleCloaking() {
      this.cloaking.enabled = !this.cloaking.enabled
      this.hasUnsavedChanges = true
    },

    selectCloakPage(pageId) {
      this.cloaking.selectedPage = pageId
      this.hasUnsavedChanges = true
    },

    setCloakMethod(method) {
      this.cloaking.cloakMethod = method
      this.hasUnsavedChanges = true
    },

    setRedirectUrl(url) {
      this.cloaking.redirectUrl = url
      this.hasUnsavedChanges = true
    },

    async saveChanges() {
      this.isSaving = true
      this.saveError = null
      try {
        const payload = {
          colors: this.colors,
          displayMode: this.displayMode,
          sections: this.orderedSections.map(({ id, visible, order }) => ({ id, visible, order })),
          cloaking: {
            enabled:       this.cloaking.enabled,
            pageConfigured: this.cloaking.pageConfigured,
            pageLabel:     this.cloaking.pageLabel,
            selectedPage:  this.cloaking.selectedPage,
            cloakMethod:   this.cloaking.cloakMethod,
            redirectUrl:   this.cloaking.redirectUrl,
          },
        }
        await themeApi.saveConfig(payload)
        this.hasUnsavedChanges = false
      } catch (err) {
        this.saveError = err.message
      } finally {
        this.isSaving = false
      }
    },

    async loadConfig() {
      this.isLoading = true
      try {
        const data = await themeApi.getConfig()
        if (data.colors)     this.colors = data.colors
        if (data.displayMode) this.displayMode = data.displayMode
        if (data.sections) {
          this.sections = data.sections.map((s, i) => ({
            ...DEFAULT_SECTIONS.find((d) => d.id === s.id) || {},
            ...s,
            order: s.order ?? i,
          }))
        }
        if (data.cloaking) this.cloaking = { ...this.cloaking, ...data.cloaking }
        this.hasUnsavedChanges = false
      } catch {
        // Backend not connected — use defaults silently
      } finally {
        this.isLoading = false
      }
    },
  },
})
