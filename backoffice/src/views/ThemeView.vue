<template>
  <div class="view-scroll">
    <div class="view-content">

      <!-- Display mode -->
      <div class="panel-card">
        <div class="panel-card-title">
          <i class="panel-card-title-icon ti ti-sun" aria-hidden="true" />
          Display mode
        </div>
        <div class="mode-toggle-group">
          <button
            v-for="mode in modes"
            :key="mode.value"
            class="mode-toggle-btn"
            :class="{ active: store.displayMode === mode.value }"
            @click="store.setDisplayMode(mode.value)"
          >
            <i :class="`ti ${mode.icon}`" aria-hidden="true" />
            {{ mode.label }}
          </button>
        </div>
      </div>

      <!-- Color palette -->
      <div class="panel-card">
        <div class="panel-card-title">
          <i class="panel-card-title-icon ti ti-color-swatch" aria-hidden="true" />
          Color palette
        </div>

        <div class="color-roles-list">
          <div v-for="role in colorRoles" :key="role.key" class="color-role-row">
            <span class="color-role-label">{{ role.label }}</span>
            <div class="color-role-control">
              <div
                class="color-swatch-btn"
                :style="{ background: store.colors[role.key] }"
                :title="`Pick ${role.label}`"
                @click="openColorPicker(role.key)"
              />
              <input
                type="color"
                :id="`picker-${role.key}`"
                :value="store.colors[role.key]"
                class="sr-only"
                @input="store.updateColor(role.key, $event.target.value)"
              />
              <input
                type="text"
                class="color-hex-input"
                :value="store.colors[role.key]"
                maxlength="7"
                @change="onHexChange(role.key, $event.target.value)"
              />
            </div>
          </div>
        </div>

        <div class="palette-presets">
          <div
            v-for="preset in store.presets"
            :key="preset.name"
            class="palette-preset-dot"
            :class="{ selected: isActivePreset(preset) }"
            :style="{ background: preset.primary }"
            :title="preset.name"
            @click="store.applyPreset(preset)"
          />
        </div>
      </div>

      <!-- Section order -->
      <div class="panel-card">
        <div class="panel-card-title">
          <i class="panel-card-title-icon ti ti-layout-rows" aria-hidden="true" />
          Section order
          <span class="text-xs font-normal ml-1" style="color: var(--color-text-muted)">drag to reorder</span>
        </div>

        <div class="section-drag-list">
          <div
            v-for="(section, index) in localSections"
            :key="section.id"
            class="section-drag-item"
            :class="{ 'dragging-over': dragState.overIndex.value === index }"
            draggable="true"
            @dragstart="dragState.onDragStart(index)"
            @dragover="dragState.onDragOver($event, index)"
            @dragend="commitSections"
            @dragleave="dragState.onDragLeave()"
          >
            <i class="drag-handle ti ti-grip-vertical" aria-hidden="true" />
            <span class="section-order-num">{{ index + 1 }}</span>
            <i class="section-icon ti" :class="section.icon" aria-hidden="true" />
            <span class="section-item-name">{{ section.name }}</span>
            <span
              class="section-visibility-badge"
              :class="section.visible ? 'badge-visible' : 'badge-hidden'"
            >
              {{ section.visible ? 'Visible' : 'Hidden' }}
            </span>
            <i
              class="section-toggle-btn ti"
              :class="[section.visible ? 'ti-eye on' : 'ti-eye-off', { on: section.visible }]"
              aria-hidden="true"
              @click.stop="toggleSection(section.id)"
            />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useThemeStore } from '@/stores/theme.js'
import { useDragSort } from '@/composables/useDragSort.js'

const store = useThemeStore()

const localSections = ref(store.orderedSections.map((s) => ({ ...s })))

watch(
  () => store.sections,
  (val) => {
    localSections.value = [...val].sort((a, b) => a.order - b.order).map((s) => ({ ...s }))
  },
  { deep: true }
)

const dragState = useDragSort(localSections)

function commitSections() {
  dragState.onDragEnd()
  store.updateSections(localSections.value)
}

function toggleSection(id) {
  const s = localSections.value.find((x) => x.id === id)
  if (s) s.visible = !s.visible
  store.toggleSection(id)
}

function openColorPicker(key) {
  document.getElementById(`picker-${key}`).click()
}

function onHexChange(key, value) {
  if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
    store.updateColor(key, value)
  }
}

function isActivePreset(preset) {
  return (
    store.colors.primary === preset.primary &&
    store.colors.secondary === preset.secondary
  )
}

const modes = [
  { value: 'light', label: 'Light', icon: 'ti-sun' },
  { value: 'dark', label: 'Dark', icon: 'ti-moon' },
  { value: 'system', label: 'System', icon: 'ti-device-laptop' },
]

const colorRoles = [
  { key: 'primary', label: 'Primary' },
  { key: 'secondary', label: 'Secondary' },
  { key: 'accent', label: 'Accent' },
  { key: 'bgTint', label: 'Background tint' },
]
</script>
