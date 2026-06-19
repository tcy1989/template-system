<template>
  <header class="site-header">
    <button class="header-hamburger" @click="sidebar.toggle()" aria-label="Toggle menu">
      <i class="ti ti-menu-2" aria-hidden="true" />
    </button>

    <div class="header-logo">
      <div class="header-logo-icon">
        <i class="ti ti-paw" aria-hidden="true" />
      </div>
      <span class="header-logo-text">TWolf.bet</span>
    </div>

    <nav class="header-nav">
      <div class="header-nav-item active">iGaming</div>
      <div class="header-nav-item">Sport</div>
    </nav>

    <div class="header-search">
      <i class="ti ti-search" aria-hidden="true" style="color:var(--text-faint);font-size:14px;" />
      <input type="text" placeholder="Search for Games" />
    </div>

    <div class="header-actions">
      <div class="header-balance">
        <i class="ti ti-currency-bitcoin" aria-hidden="true" style="font-size:14px;" />
        <span class="balance-text">$1,000.00</span>
      </div>
      <button class="header-btn header-btn-wallet">
        <i class="ti ti-wallet" aria-hidden="true" style="font-size:14px;" />
        <span class="wallet-text">Wallet</span>
      </button>
      <div class="header-avatar">
        <i class="ti ti-user" aria-hidden="true" style="font-size:14px;" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { useSidebar } from '@/composables/useSidebar.js'
const sidebar = useSidebar()
</script>
