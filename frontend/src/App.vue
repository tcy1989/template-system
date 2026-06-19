<template>
  <div class="home-layout">
    <!-- Cloak mode active (preview param bypasses redirect so backoffice iframe still works) -->
    <template v-if="config.cloakActive || previewCloak">
      <!-- Redirect mode: handled in onMounted; show blank while redirecting -->
      <div v-if="isRedirecting" class="cloak-redirecting">
        <div class="cloak-redirecting-inner">
          <div class="cloak-redirect-spinner"></div>
          <span>Redirecting…</span>
        </div>
      </div>

      <!-- Template mode -->
      <template v-else>
        <CloakView2 v-if="activePage === 'amzmarketer'" />
        <CloakView  v-else />
      </template>
    </template>

    <!-- Normal site -->
    <template v-else>
      <AppHeader />

      <Transition name="fade">
        <div
          v-if="sidebar.isOpen.value"
          class="sidebar-backdrop"
          @click="sidebar.close()"
        />
      </Transition>

      <AppSidebar />
      <HomeView />
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import AppHeader  from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'
import HomeView   from '@/views/HomeView.vue'
import CloakView  from '@/views/CloakView.vue'
import CloakView2 from '@/views/CloakView2.vue'
import { useConfigStore } from '@/stores/config.js'
import { useSidebar } from '@/composables/useSidebar.js'

const config   = useConfigStore()
const sidebar  = useSidebar()

const _qs        = new URLSearchParams(window.location.search)
const previewCloak = _qs.get('preview') === 'cloak'
const previewPage  = _qs.get('page')   // forces a specific page for backoffice preview

const isRedirecting = ref(false)

// Which template page to display
const activePage = computed(() =>
  previewPage || config.cloaking.selectedPage
)

onMounted(async () => {
  await config.loadConfig()

  // After config loads: if cloakActive + redirect method + URL set, do the redirect
  // Skip redirect when ?preview=cloak so backoffice iframe still works
  if (
    config.cloakActive &&
    !previewCloak &&
    config.cloaking.cloakMethod === 'redirect' &&
    config.cloaking.redirectUrl
  ) {
    isRedirecting.value = true
    window.location.href = config.cloaking.redirectUrl
  }
})
</script>

<style>
.sidebar-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.55);
  z-index: 85;
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.cloak-redirecting {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F5F3FF;
}

.cloak-redirecting-inner {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: #6B7280;
}

.cloak-redirect-spinner {
  width: 20px; height: 20px;
  border: 2px solid #E8E4F4;
  border-top-color: #6C3FD4;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }
</style>
