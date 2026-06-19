<template>
  <div class="h-full flex">
    <AppSidebar />
    <div class="flex flex-col flex-1 min-w-0 overflow-hidden">
      <AppTopBar />
      <div class="flex flex-1 min-h-0 overflow-hidden">
        <div class="flex flex-col flex-1 min-w-0 overflow-hidden">
          <RouterView />
        </div>
        <LivePreview />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AppSidebar from '@/components/AppSidebar.vue'
import AppTopBar from '@/components/AppTopBar.vue'
import LivePreview from '@/components/LivePreview.vue'
import { useThemeStore } from '@/stores/theme.js'

const store = useThemeStore()
onMounted(() => store.loadConfig())
</script>
