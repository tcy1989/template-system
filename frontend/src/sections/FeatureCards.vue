<template>
  <div class="feature-grid content-section">
    <div v-for="card in features" :key="card.title" class="feature-card">
      <div class="feature-card-icon" :style="{ background: card.bg }">
        <i :class="`ti ${card.icon}`" :style="{ color: card.color, fontSize: '18px' }" aria-hidden="true" />
      </div>
      <div class="feature-card-title">{{ card.title }}</div>
      <div class="feature-card-desc">{{ card.desc }}</div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    title: 'RAKEBACK SYSTEM',
    desc: 'Thanks, genius, get a fraction of your losses back every day.',
    icon: 'ti-percentage',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.15)',
  },
  {
    title: 'WEEKLY BONUS',
    desc: 'Come back every week and earn a reload bonus as a loyal player.',
    icon: 'ti-calendar-week',
    color: '#9FA1FF',
    bg: 'rgba(159,161,255,0.15)',
  },
  {
    title: 'GIVEAWAYS',
    desc: 'The tipsy old man at the tavern would also like to win a prize.',
    icon: 'ti-gift',
    color: '#22C55E',
    bg: 'rgba(34,197,94,0.15)',
  },
  {
    title: 'CHAT RAIN',
    desc: 'Actively reward players on chat and randomly distribute prizes.',
    icon: 'ti-cloud-rain',
    color: '#38BDF8',
    bg: 'rgba(56,189,248,0.15)',
  },
]
</script>
