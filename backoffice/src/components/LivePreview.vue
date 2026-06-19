<template>
  <aside class="preview-panel">
    <div class="preview-topbar">
      <i class="ti ti-device-desktop text-base" style="color: var(--color-primary)" aria-hidden="true" />
      <span class="preview-topbar-title">Live preview</span>
      <div class="preview-url-bar">
        <i class="ti ti-lock text-xs opacity-40" aria-hidden="true" />
        localhost:3000
      </div>
      <span class="preview-live-badge">● Live</span>
    </div>

    <div class="preview-wrapper">
      <div
        class="preview-frame"
        :class="{ 'preview-dark': store.displayMode === 'dark' }"
        :style="cssVars"
      >
        <div class="preview-site-nav">
          <span class="preview-site-logo">MyBrand</span>
          <div class="preview-nav-links">
            <span class="preview-nav-link">Home</span>
            <span class="preview-nav-link">About</span>
            <span class="preview-nav-link">Contact</span>
          </div>
        </div>

        <template v-for="section in orderedVisibleSections" :key="section.id">
          <div v-if="section.id === 'hero'" class="preview-section preview-hero">
            <h2>Welcome to MyBrand</h2>
            <p>We build beautiful products that<br />people love to use every day.</p>
            <div class="preview-hero-btn">Get started</div>
          </div>

          <div v-else-if="section.id === 'features'" class="preview-section preview-features">
            <div class="preview-section-title">Why choose us</div>
            <div class="preview-features-grid">
              <div v-for="f in features" :key="f.label" class="preview-feature-card">
                <div class="preview-feature-icon" />
                <div class="preview-feature-label">{{ f.label }}</div>
                <div class="preview-feature-sub">{{ f.sub }}</div>
              </div>
            </div>
          </div>

          <div v-else-if="section.id === 'testimonials'" class="preview-section preview-testimonials">
            <div class="preview-section-title">What people say</div>
            <div class="preview-tcard">
              <p>"This product changed how our team works. Absolutely love the simplicity."</p>
              <div class="preview-tcard-author">— Sarah K., Product Manager</div>
            </div>
          </div>

          <div v-else-if="section.id === 'pricing'" class="preview-section preview-pricing">
            <div class="preview-section-title">Pricing</div>
            <div class="preview-pricing-cards">
              <div class="preview-pricing-card">
                <div class="preview-pricing-name">Starter</div>
                <div class="preview-pricing-price">$9/mo</div>
              </div>
              <div class="preview-pricing-card featured">
                <div class="preview-pricing-name">Pro</div>
                <div class="preview-pricing-price">$29/mo</div>
              </div>
            </div>
          </div>

          <div v-else-if="section.id === 'cta'" class="preview-section preview-cta">
            <h3>Ready to get started?</h3>
            <p>Join thousands of happy customers today.</p>
            <div class="preview-cta-btn">Sign up free</div>
          </div>
        </template>

        <div
          v-if="orderedVisibleSections.length === 0"
          class="py-10 text-center text-xs"
          style="color: var(--color-text-muted)"
        >
          No sections visible
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme.js'

const store = useThemeStore()

const isDark = computed(() => store.displayMode === 'dark')

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

const cssVars = computed(() => {
  const c = store.colors
  const dark = isDark.value
  return {
    '--preview-primary': c.primary,
    '--preview-primary-muted': hexToRgba(c.primary, 0.15),
    '--preview-secondary': c.secondary,
    '--preview-accent': c.accent,
    '--preview-bg-tint': c.bgTint,
    '--preview-hero-bg': hexToRgba(c.primary, dark ? 0.25 : 0.12),
    '--preview-surface': dark ? '#16162A' : '#ffffff',
    '--preview-surface-2': dark ? '#1E1E32' : '#FAFAFE',
    '--preview-text': dark ? '#E8E8FF' : '#1a1a2e',
    '--preview-text-muted': dark ? '#8888BB' : '#6B6B9A',
  }
})

const orderedVisibleSections = computed(() =>
  store.orderedSections.filter((s) => s.visible)
)

const features = [
  { label: 'Fast', sub: 'Lightning speed' },
  { label: 'Reliable', sub: '99.9% uptime' },
  { label: 'Secure', sub: 'Bank-grade SSL' },
]
</script>
