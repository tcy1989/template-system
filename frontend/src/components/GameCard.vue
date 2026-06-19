<template>
  <div class="game-card">
    <div class="game-card-thumb" :style="{ background: thumbGradient }">
      <i :class="`ti ti-${icon}`" aria-hidden="true" />
      <span>{{ game.name }}</span>
      <div class="game-card-overlay">
        <button class="game-card-play-btn">Play Now</button>
      </div>
    </div>
    <div class="game-card-name">{{ game.name }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  game: { type: Object, required: true },
})

const ICONS = ['cherry', 'cards', 'dice', 'coin', 'diamond', 'crown', 'flame', 'star']

const icon = computed(() => {
  const i = props.game.id % ICONS.length
  return ICONS[i]
})

const thumbGradient = computed(() => {
  const base = props.game.color || '#1C1D35'
  return `linear-gradient(145deg, ${base}CC, ${base}66)`
})
</script>
