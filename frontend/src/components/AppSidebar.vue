<template>
  <aside class="site-sidebar" :class="{ 'is-open': sidebar.isOpen.value }">
    <div class="sidebar-close-row">
      <button class="sidebar-close-btn" @click="sidebar.close()" aria-label="Close menu">
        <i class="ti ti-x" aria-hidden="true" />
      </button>
    </div>

    <div class="sidebar-quick">
      <div class="sidebar-quick-item" @click="sidebar.close()">
        <span class="left">
          <i class="ti ti-heart" style="font-size:15px;color:var(--color-primary);" aria-hidden="true" />
          Favorites
        </span>
        <span class="sidebar-badge">3</span>
      </div>
      <div class="sidebar-quick-item" @click="sidebar.close()">
        <span class="left">
          <i class="ti ti-clock" style="font-size:15px;color:var(--text-faint);" aria-hidden="true" />
          Recently Played
        </span>
      </div>
    </div>

    <div class="sidebar-section">
      <div class="sidebar-section-label">Games</div>
      <div
        v-for="item in gamesNav"
        :key="item.label"
        class="sidebar-item"
        :class="{ active: active === item.label }"
        @click="active = item.label; sidebar.close()"
      >
        <i :class="`ti ${item.icon}`" aria-hidden="true" />
        {{ item.label }}
      </div>
    </div>

    <hr class="sidebar-divider" />

    <div class="sidebar-section">
      <div class="sidebar-item" @click="sidebar.close()">
        <i class="ti ti-live-photo" aria-hidden="true" />
        Live Casino
      </div>
      <div class="sidebar-item" @click="sidebar.close()">
        <i class="ti ti-ball-football" aria-hidden="true" />
        Sport
      </div>
    </div>

    <hr class="sidebar-divider" />

    <div class="sidebar-section">
      <div class="sidebar-item" @click="sidebar.close()">
        <i class="ti ti-checklist" aria-hidden="true" />
        Daily Tasks
      </div>
      <div class="sidebar-item" @click="sidebar.close()">
        <i class="ti ti-paw" aria-hidden="true" />
        Wolf Bet
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { useSidebar } from '@/composables/useSidebar.js'

const sidebar = useSidebar()
const active  = ref('All Games')

const gamesNav = [
  { label: 'Slot Games',  icon: 'ti-cherry' },
  { label: 'Lottery',     icon: 'ti-ticket' },
  { label: 'Table Games', icon: 'ti-cards' },
  { label: 'Blackboard',  icon: 'ti-device-gamepad-2' },
  { label: 'All Games',   icon: 'ti-layout-grid' },
]
</script>
