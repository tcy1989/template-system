<template>
  <div class="content-section">
    <div class="section-header">
      <div class="section-title">
        <i class="ti ti-building-store" aria-hidden="true" />
        Providers
      </div>
      <div class="section-actions">
        <div class="section-nav-btn"><i class="ti ti-chevron-left" aria-hidden="true" /></div>
        <div class="section-nav-btn"><i class="ti ti-chevron-right" aria-hidden="true" /></div>
        <div class="section-see-all">See all</div>
      </div>
    </div>
    <div class="providers-grid">
      <div v-for="p in providers" :key="p.id" class="provider-card">
        <span style="font-size: 20px;">{{ p.emoji }}</span>
        {{ p.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { PROVIDERS } from '@/data/sampleData.js'
const providers = PROVIDERS
</script>
