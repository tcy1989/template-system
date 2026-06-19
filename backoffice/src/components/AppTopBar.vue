<template>
  <header class="topbar">
    <div class="topbar-breadcrumb">
      <span v-if="route.meta.section">{{ route.meta.section }}</span>
      <span v-if="route.meta.section" class="topbar-breadcrumb-sep">/</span>
      <span class="topbar-breadcrumb-current">{{ route.meta.label }}</span>
    </div>

    <div class="topbar-actions">
      <span v-if="store.saveError" class="save-status text-red-400 text-xs">
        Save failed
      </span>
      <span v-else-if="!store.hasUnsavedChanges && !store.isSaving" class="save-status saved">
        <i class="ti ti-check" aria-hidden="true" /> All saved
      </span>
      <span v-else-if="store.hasUnsavedChanges && !store.isSaving" class="flex items-center gap-1.5">
        <span class="unsaved-dot" />
        <span class="save-status">Unsaved changes</span>
      </span>

      <button
        class="btn-save"
        :disabled="store.isSaving || !store.hasUnsavedChanges"
        @click="store.saveChanges()"
      >
        <i v-if="store.isSaving" class="ti ti-loader-2 animate-spin" aria-hidden="true" />
        <i v-else class="ti ti-device-floppy" aria-hidden="true" />
        {{ store.isSaving ? 'Saving…' : 'Save changes' }}
      </button>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useThemeStore } from '@/stores/theme.js'

const route = useRoute()
const store = useThemeStore()
</script>
