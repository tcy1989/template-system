<template>
  <main class="home-main">
    <template v-for="section in config.visibleSections" :key="section.id">
      <component :is="sectionMap[section.id]" v-if="sectionMap[section.id]" />
    </template>
    <AppFooter />
  </main>
</template>

<script setup>
import { useConfigStore } from '@/stores/config.js'
import AppFooter from '@/components/AppFooter.vue'

import HeroBanner     from '@/sections/HeroBanner.vue'
import PromoBanners   from '@/sections/PromoBanners.vue'
import FeatureCards   from '@/sections/FeatureCards.vue'
import GameFilters    from '@/sections/GameFilters.vue'
import InHouseGames   from '@/sections/InHouseGames.vue'
import GameGridSection from '@/sections/GameGridSection.vue'
import Providers      from '@/sections/Providers.vue'

import { HOT_NEW_GAMES, TABLE_GAMES, PROVABLY_FAIR } from '@/data/sampleData.js'
import { h } from 'vue'

const config = useConfigStore()

const sectionMap = {
  'hero':          HeroBanner,
  'promo-banners': PromoBanners,
  'feature-cards': FeatureCards,
  'game-filters':  GameFilters,
  'inhouse-games': InHouseGames,
  'hot-new-games': {
    render: () => h(GameGridSection, { title: 'Hot New Games', icon: 'ti-flame', games: HOT_NEW_GAMES })
  },
  'table-games': {
    render: () => h(GameGridSection, { title: 'Best Table Games', icon: 'ti-cards', games: TABLE_GAMES })
  },
  'provably-fair': {
    render: () => h(GameGridSection, { title: 'Best Provably Fair Games', icon: 'ti-shield-check', games: PROVABLY_FAIR })
  },
  'providers': Providers,
}
</script>
