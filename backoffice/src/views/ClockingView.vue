<template>
  <div class="view-scroll">
    <div class="view-content">

      <!-- ── Cloak status toggle ── -->
      <div class="panel-card">
        <div class="panel-card-title">
          <i class="panel-card-title-icon ti ti-eye-off" aria-hidden="true" />
          Cloak status
        </div>

        <div class="clocking-status-card" :class="store.cloaking.enabled ? 'active' : 'inactive'">
          <div class="clocking-status-left">
            <div class="clocking-status-dot" :class="store.cloaking.enabled ? 'active' : 'inactive'">
              <i class="ti" :class="store.cloaking.enabled ? 'ti-eye-off' : 'ti-eye'" aria-hidden="true" />
            </div>
            <div>
              <div class="clocking-status-title">
                {{ store.cloaking.enabled ? 'Cloaking is ON' : 'Cloaking is OFF' }}
              </div>
              <div class="clocking-status-sub">
                {{ store.cloaking.enabled
                    ? activeMethodLabel
                    : 'Visitors see the main website' }}
              </div>
            </div>
          </div>

          <div style="display:flex; align-items:center; gap:10px;">
            <span class="live-badge" :class="store.cloaking.enabled ? 'on' : 'off'">
              <span class="live-dot" />
              {{ store.cloaking.enabled ? 'Live' : 'Off' }}
            </span>
            <label class="toggle-switch" title="Toggle cloak">
              <input
                type="checkbox"
                :checked="store.cloaking.enabled"
                @change="store.toggleCloaking()"
              />
              <span class="toggle-track" />
            </label>
          </div>
        </div>
      </div>

      <!-- ── Cloak method selector ── -->
      <div class="panel-card">
        <div class="panel-card-title">
          <i class="panel-card-title-icon ti ti-switch-2" aria-hidden="true" />
          Cloak method
        </div>

        <div class="cloak-method-grid">
          <!-- Redirect option -->
          <div
            class="cloak-method-card"
            :class="{ selected: store.cloaking.cloakMethod === 'redirect' }"
            @click="store.setCloakMethod('redirect')"
          >
            <div class="cloak-method-icon redirect">
              <i class="ti ti-arrow-up-right" />
            </div>
            <div class="cloak-method-body">
              <div class="cloak-method-title">Redirect to URL</div>
              <div class="cloak-method-desc">Send visitors to an external link. Fast and simple — no page rendered on your server.</div>
            </div>
            <div class="cloak-method-radio" :class="{ active: store.cloaking.cloakMethod === 'redirect' }">
              <div class="cloak-method-radio-dot" v-if="store.cloaking.cloakMethod === 'redirect'" />
            </div>
          </div>

          <!-- Template option -->
          <div
            class="cloak-method-card"
            :class="{ selected: store.cloaking.cloakMethod === 'template' }"
            @click="store.setCloakMethod('template')"
          >
            <div class="cloak-method-icon template">
              <i class="ti ti-layout-2" />
            </div>
            <div class="cloak-method-body">
              <div class="cloak-method-title">Use prepared template</div>
              <div class="cloak-method-desc">Show one of your pre-built cloak landing pages. Full control over appearance.</div>
            </div>
            <div class="cloak-method-radio" :class="{ active: store.cloaking.cloakMethod === 'template' }">
              <div class="cloak-method-radio-dot" v-if="store.cloaking.cloakMethod === 'template'" />
            </div>
          </div>
        </div>
      </div>

      <!-- ── Redirect URL input (shown when method = redirect) ── -->
      <div v-if="store.cloaking.cloakMethod === 'redirect'" class="panel-card">
        <div class="panel-card-title">
          <i class="panel-card-title-icon ti ti-link" aria-hidden="true" />
          Redirect destination
        </div>

        <div class="cloak-redirect-wrap">
          <div class="cloak-redirect-field" :class="{ error: urlError, valid: urlValid }">
            <span class="cloak-redirect-prefix">
              <i class="ti ti-world" />
            </span>
            <input
              v-model="redirectInput"
              class="cloak-redirect-input"
              type="url"
              placeholder="https://example.com"
              @input="onRedirectInput"
              @blur="validateUrl"
            />
            <span v-if="urlValid" class="cloak-redirect-status valid">
              <i class="ti ti-circle-check" />
            </span>
            <span v-if="urlError" class="cloak-redirect-status error">
              <i class="ti ti-alert-circle" />
            </span>
          </div>

          <div v-if="urlError" class="cloak-redirect-error">{{ urlError }}</div>
          <div class="cloak-redirect-hint">
            Visitors will be instantly redirected to this URL when cloaking is ON. Use a full URL including https://.
          </div>

          <div class="cloak-redirect-actions">
            <button
              class="cloak-redirect-save-btn"
              :disabled="!urlValid"
              @click="saveRedirectUrl"
            >
              Apply URL
            </button>
            <a
              v-if="store.cloaking.redirectUrl"
              :href="store.cloaking.redirectUrl"
              target="_blank"
              class="cloak-redirect-test-btn"
            >
              <i class="ti ti-external-link" style="margin-right:4px;" />
              Test link ↗
            </a>
          </div>

          <!-- Current saved redirect -->
          <div v-if="store.cloaking.redirectUrl" class="cloak-redirect-current">
            <i class="ti ti-check" style="color:#22c55e;margin-right:6px;" />
            Currently redirecting to:
            <span class="cloak-redirect-url-chip">{{ store.cloaking.redirectUrl }}</span>
          </div>
        </div>
      </div>

      <!-- ── Template page selector (shown when method = template) ── -->
      <template v-if="store.cloaking.cloakMethod === 'template'">
        <div class="panel-card">
          <div class="panel-card-title">
            <i class="panel-card-title-icon ti ti-layout-board" aria-hidden="true" />
            Choose cloak landing page
          </div>

          <div class="cloak-page-grid">
            <div
              v-for="page in cloakPages"
              :key="page.id"
              class="cloak-page-option"
              :class="{ selected: store.cloaking.selectedPage === page.id }"
              @click="store.selectCloakPage(page.id)"
            >
              <!-- Mini preview thumbnail -->
              <div class="cloak-page-thumb" :style="{ background: page.thumbBg }">
                <div class="cpt-nav" :style="{ background: page.navBg }">
                  <div class="cpt-nav-logo" :style="{ background: page.accent }"></div>
                  <div class="cpt-nav-links">
                    <div v-for="i in 4" :key="i" class="cpt-nav-link"></div>
                  </div>
                  <div class="cpt-nav-btn" :style="{ background: page.accent }"></div>
                </div>
                <div class="cpt-hero">
                  <div class="cpt-hero-left">
                    <div class="cpt-hero-badge" :style="{ background: page.accent + '22', borderColor: page.accent + '44' }"></div>
                    <div class="cpt-hero-title" :style="{ background: page.textColor }"></div>
                    <div class="cpt-hero-title short" :style="{ background: page.accent }"></div>
                    <div class="cpt-hero-desc"></div>
                    <div class="cpt-hero-desc short"></div>
                    <div class="cpt-hero-btns">
                      <div class="cpt-btn" :style="{ background: page.accent }"></div>
                      <div class="cpt-btn ghost" :style="{ borderColor: page.textColor }"></div>
                    </div>
                  </div>
                  <div class="cpt-hero-right">
                    <div class="cpt-hero-blob" :style="{ background: page.blobColor }"></div>
                    <div class="cpt-hero-photo" :style="{ background: page.photoGradient }"></div>
                  </div>
                </div>
                <div class="cpt-sections" :style="{ background: page.sectionBg }">
                  <div v-for="i in 3" :key="i" class="cpt-section-row">
                    <div class="cpt-section-box" :style="{ background: page.cardBg }"></div>
                    <div class="cpt-section-box" :style="{ background: page.cardBg }"></div>
                    <div class="cpt-section-box" :style="{ background: page.cardBg }"></div>
                  </div>
                </div>
                <div v-if="store.cloaking.selectedPage === page.id" class="cpt-selected-badge" :style="{ background: page.accent }">✓</div>
              </div>

              <div class="cloak-page-info">
                <div class="cloak-page-name">{{ page.name }}</div>
                <div class="cloak-page-desc">{{ page.desc }}</div>
                <div class="cloak-page-tags">
                  <span v-for="tag in page.tags" :key="tag" class="cloak-page-tag">{{ tag }}</span>
                </div>
              </div>

              <div class="cloak-page-select-row">
                <div class="cloak-page-radio" :class="{ active: store.cloaking.selectedPage === page.id }">
                  <div class="cloak-page-radio-dot" v-if="store.cloaking.selectedPage === page.id"></div>
                </div>
                <span class="cloak-page-select-label">
                  {{ store.cloaking.selectedPage === page.id ? 'Currently selected' : 'Select this page' }}
                </span>
                <a class="cloak-iframe-open-btn" :href="`${frontendUrl}/?preview=cloak&page=${page.id}`" target="_blank" @click.stop>
                  Preview ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Live iframe preview -->
        <div class="panel-card">
          <div class="panel-card-title" style="display:flex;align-items:center;justify-content:space-between;">
            <span>
              <i class="panel-card-title-icon ti ti-eye" aria-hidden="true" />
              Preview — {{ cloakPages.find(p => p.id === store.cloaking.selectedPage)?.name }}
            </span>
            <a class="cloak-iframe-open-btn" :href="`${frontendUrl}/?preview=cloak&page=${store.cloaking.selectedPage}`" target="_blank">
              Open full ↗
            </a>
          </div>
          <div class="cloak-iframe-wrap">
            <div class="cloak-iframe-toolbar">
              <span class="cloak-iframe-url">
                <i class="ti ti-world" style="margin-right:5px;font-size:12px;" />
                {{ frontendUrlDisplay }}/?preview=cloak&amp;page={{ store.cloaking.selectedPage }}
              </span>
            </div>
            <div class="cloak-iframe-container">
              <iframe
                :key="store.cloaking.selectedPage"
                :src="`${frontendUrl}/?preview=cloak&page=${store.cloaking.selectedPage}`"
                class="cloak-iframe"
                title="Cloak landing page preview"
                scrolling="yes"
              />
            </div>
          </div>
        </div>
      </template>

      <!-- ── How it works ── -->
      <div class="panel-card">
        <div class="panel-card-title">
          <i class="panel-card-title-icon ti ti-info-circle" aria-hidden="true" />
          How cloaking works
        </div>
        <div class="clocking-info-row">
          <div class="clocking-info-item">
            <i class="ti ti-toggle-right" aria-hidden="true" />
            When cloaking is <strong style="color:var(--color-text-base);">ON</strong>, visitors to the frontend URL are redirected or shown the cloak page instead of the main site.
          </div>
          <div class="clocking-info-item">
            <i class="ti ti-toggle-left" aria-hidden="true" />
            When cloaking is <strong style="color:var(--color-text-base);">OFF</strong>, the main gaming site is shown as normal.
          </div>
          <div class="clocking-info-item">
            <i class="ti ti-arrow-up-right" aria-hidden="true" />
            <strong style="color:var(--color-text-base);">Redirect mode</strong> — visitor's browser is sent to the configured URL.
          </div>
          <div class="clocking-info-item">
            <i class="ti ti-layout-2" aria-hidden="true" />
            <strong style="color:var(--color-text-base);">Template mode</strong> — a pre-built landing page is shown without leaving your domain.
          </div>
          <div class="clocking-info-item">
            <i class="ti ti-refresh" aria-hidden="true" />
            Changes take effect immediately after saving — no restart required.
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useThemeStore } from '@/stores/theme.js'

const store = useThemeStore()

const frontendUrl = import.meta.env.VITE_FRONTEND_URL || 'http://localhost:3000'
const frontendUrlDisplay = frontendUrl.replace(/^https?:\/\//, '')

/* ── Redirect URL local state ── */
const redirectInput = ref(store.cloaking.redirectUrl || '')
const urlError      = ref('')
const urlValid      = ref(false)

watch(() => store.cloaking.redirectUrl, (v) => {
  redirectInput.value = v || ''
  validateUrl()
})

function validateUrl() {
  urlError.value = ''
  urlValid.value = false
  const val = redirectInput.value.trim()
  if (!val) return
  try {
    const u = new URL(val)
    if (!['http:', 'https:'].includes(u.protocol)) {
      urlError.value = 'URL must start with http:// or https://'
      return
    }
    urlValid.value = true
  } catch {
    urlError.value = 'Please enter a valid URL (e.g. https://example.com)'
  }
}

function onRedirectInput() {
  urlError.value = ''
  urlValid.value = false
  if (redirectInput.value.trim()) validateUrl()
}

function saveRedirectUrl() {
  validateUrl()
  if (!urlValid.value) return
  store.setRedirectUrl(redirectInput.value.trim())
}

/* ── Status sub-label ── */
const activeMethodLabel = computed(() => {
  if (store.cloaking.cloakMethod === 'redirect') {
    return store.cloaking.redirectUrl
      ? `Redirecting to ${store.cloaking.redirectUrl}`
      : 'Redirect URL not set yet'
  }
  const p = cloakPages.find(p => p.id === store.cloaking.selectedPage)
  return p ? `Showing ${p.name}` : 'Showing cloak landing page'
})

/* ── Template pages data ── */
const cloakPages = [
  {
    id: 'webteck',
    name: 'WebTeck Business Site',
    desc: 'Professional IT & services company landing page with hero illustration, services section, and stats.',
    tags: ['Business', 'Light', 'IT Services'],
    thumbBg: '#F5F3FF', navBg: '#FFFFFF', accent: '#6C3FD4', textColor: '#1A1A3A',
    blobColor: '#D9D2FF', photoGradient: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)',
    sectionBg: '#FFFFFF', cardBg: '#EEE8FF',
  },
  {
    id: 'amzmarketer',
    name: 'AMZ Marketer',
    desc: 'AI-powered e-commerce learning platform with video vault, feature grid, and membership CTA.',
    tags: ['E-commerce', 'Light', 'SaaS'],
    thumbBg: '#F5F3FF', navBg: '#FFFFFF', accent: '#5B21B6', textColor: '#111827',
    blobColor: '#EDE9FE', photoGradient: 'linear-gradient(160deg,#C4B5FD,#7C3AED)',
    sectionBg: '#F9FAFB', cardBg: '#FFFFFF',
  },
]
</script>
