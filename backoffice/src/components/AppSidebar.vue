<template>
  <aside class="sidebar">
    <div class="sidebar-logo">
      <div class="sidebar-logo-name">SiteControl</div>
      <div class="sidebar-logo-sub">Backoffice v1.0</div>
    </div>

    <nav>
      <div class="nav-section">
        <div class="nav-section-label">Appearance</div>
        <RouterLink
          v-for="item in appearanceNav"
          :key="item.path"
          :to="item.path"
          custom
          v-slot="{ isActive, navigate }"
        >
          <div
            class="nav-item"
            :class="{ active: isActive }"
            @click="navigate"
          >
            <i class="nav-item-icon" :class="`ti ${item.icon}`" aria-hidden="true" />
            <span class="nav-item-label">{{ item.label }}</span>
          </div>
        </RouterLink>
      </div>

      <div class="nav-section">
        <div class="nav-section-label">Content</div>
        <RouterLink
          v-for="item in contentNav"
          :key="item.path"
          :to="item.path"
          custom
          v-slot="{ isActive, navigate }"
        >
          <div
            class="nav-item"
            :class="{ active: isActive }"
            @click="navigate"
          >
            <i class="nav-item-icon" :class="`ti ${item.icon}`" aria-hidden="true" />
            <span class="nav-item-label">{{ item.label }}</span>
          </div>
        </RouterLink>
      </div>

      <div class="nav-section">
        <div class="nav-section-label">Tools</div>
        <RouterLink to="/clocking" custom v-slot="{ isActive, navigate }">
          <div class="nav-item" :class="{ active: isActive }" @click="navigate">
            <i class="nav-item-icon ti ti-eye-off" aria-hidden="true" />
            <span class="nav-item-label">Clocking</span>
            <span
              v-if="store.cloaking.enabled"
              style="margin-left:auto; width:7px; height:7px; border-radius:50%; background:#22c55e; flex-shrink:0;"
            />
          </div>
        </RouterLink>
      </div>
    </nav>

    <div class="sidebar-footer">
      <RouterLink to="/settings" custom v-slot="{ isActive, navigate }">
        <div class="nav-item" :class="{ active: isActive }" @click="navigate">
          <i class="nav-item-icon ti ti-settings" aria-hidden="true" />
          <span class="nav-item-label">Settings</span>
        </div>
      </RouterLink>
    </div>
  </aside>
</template>

<script setup>
import { useThemeStore } from '@/stores/theme.js'
const store = useThemeStore()

const appearanceNav = [
  { path: '/theme', label: 'Theme', icon: 'ti-palette' },
  { path: '/layout', label: 'Layout', icon: 'ti-layout-2' },
  { path: '/typography', label: 'Typography', icon: 'ti-letter-case' },
]

const contentNav = [
  { path: '/media', label: 'Media', icon: 'ti-photo' },
  { path: '/pages', label: 'Pages', icon: 'ti-file-text' },
]
</script>
