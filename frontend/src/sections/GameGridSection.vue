<template>
  <div class="content-section">
    <div class="section-header">
      <div class="section-title">
        <i :class="`ti ${icon}`" aria-hidden="true" />
        {{ title }}
      </div>
      <div class="section-actions">
        <div class="section-nav-btn"><i class="ti ti-chevron-left" aria-hidden="true" /></div>
        <div class="section-nav-btn"><i class="ti ti-chevron-right" aria-hidden="true" /></div>
        <div class="section-see-all">See all</div>
      </div>
    </div>
    <div class="game-grid game-grid-cols-6">
      <GameCard v-for="game in games" :key="game.id" :game="game" />
    </div>
  </div>
</template>

<script setup>
import GameCard from '@/components/GameCard.vue'

defineProps({
  title: { type: String, required: true },
  icon:  { type: String, default: 'ti-cards' },
  games: { type: Array,  required: true },
})
</script>
