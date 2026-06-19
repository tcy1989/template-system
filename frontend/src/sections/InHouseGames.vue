<template>
  <div class="content-section">
    <div class="section-header">
      <div class="section-title">
        <i class="ti ti-device-gamepad-2" aria-hidden="true" />
        In-House Games
      </div>
      <div class="section-actions">
        <div class="section-nav-btn"><i class="ti ti-chevron-left" aria-hidden="true" /></div>
        <div class="section-nav-btn"><i class="ti ti-chevron-right" aria-hidden="true" /></div>
        <div class="section-see-all">See all</div>
      </div>
    </div>
    <div class="inhouse-grid">
      <div v-for="game in games" :key="game.id" class="inhouse-card">
        <div class="inhouse-thumb" :style="{ background: `linear-gradient(145deg, ${game.color}CC, ${game.color}44)` }">
          <span style="font-size: 40px;">{{ game.emoji }}</span>
          <div class="inhouse-thumb-badge">{{ game.name }}</div>
        </div>
        <div class="inhouse-body">
          <div class="inhouse-name">{{ game.name }}</div>
          <div class="inhouse-sub">{{ game.sub }}</div>
          <div class="inhouse-stats">
            <div class="inhouse-stat">
              <span class="inhouse-stat-val">{{ game.players }}</span>
              <span class="inhouse-stat-label">Players</span>
            </div>
            <div class="inhouse-stat">
              <span class="inhouse-stat-val" style="color: var(--gold);">{{ game.totalBet }}●</span>
              <span class="inhouse-stat-label">Total Bet</span>
            </div>
          </div>
          <button class="inhouse-play-btn">Play Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { INHOUSE_GAMES } from '@/data/sampleData.js'
const games = INHOUSE_GAMES
</script>
