<template>
  <div class="content-section" style="display: flex; flex-direction: column; gap: 10px;">
    <div class="stats-bar">
      <div v-for="(stat, i) in stats" :key="stat.label" style="display:contents;">
        <div class="stat-item">
          <span class="stat-num">{{ stat.num }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
        <div v-if="i < stats.length - 1" class="stat-divider" />
      </div>
    </div>

    <div class="filter-tabs">
      <div
        v-for="tab in tabs"
        :key="tab.id"
        class="filter-tab"
        :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        <i :class="`ti ${tab.icon}`" style="font-size: 14px;" aria-hidden="true" />
        {{ tab.label }}
      </div>

      <div style="margin-left: auto; display: flex; align-items: center; gap: 6px; background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; padding: 6px 12px;">
        <i class="ti ti-search" style="font-size: 13px; color: var(--text-faint);" aria-hidden="true" />
        <input type="text" placeholder="Search for Games" style="background: transparent; border: none; outline: none; font-size: 12px; color: var(--text); width: 130px;" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FILTER_TABS, STATS } from '@/data/sampleData.js'

const activeTab = ref('all')
const tabs = FILTER_TABS
const stats = STATS
</script>
