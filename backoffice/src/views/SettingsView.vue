<template>
  <div class="view-scroll">
    <div class="view-content">

      <div class="panel-card">
        <div class="panel-card-title">
          <i class="panel-card-title-icon ti ti-api" aria-hidden="true" />
          API connection
        </div>
        <div class="flex flex-col gap-3">
          <div>
            <label class="color-role-label block mb-1">Backend base URL</label>
            <input
              type="text"
              class="color-hex-input w-full"
              style="width:100%"
              :value="apiBase"
              placeholder="http://localhost:8000/api"
              @change="apiBase = $event.target.value"
            />
          </div>
          <div class="flex items-center gap-2">
            <span
              class="section-visibility-badge"
              :class="connected ? 'badge-visible' : 'badge-hidden'"
            >
              {{ connected ? 'Connected' : 'Not connected' }}
            </span>
            <button class="btn-preview" style="font-size:11px" @click="testConnection">
              Test connection
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const apiBase = ref(import.meta.env.VITE_API_BASE || 'http://localhost:8000/api')
const connected = ref(false)

async function testConnection() {
  try {
    await fetch(`${apiBase.value}/health`)
    connected.value = true
  } catch {
    connected.value = false
  }
}
</script>
