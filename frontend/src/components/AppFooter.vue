<template>
  <footer class="site-footer">
    <div class="footer-main">
      <div class="footer-brand">
        <div style="display:flex; align-items:center; gap:8px; font-size:16px; font-weight:700; color:var(--text);">
          <div style="width:28px; height:28px; border-radius:8px; background:var(--color-primary); display:flex; align-items:center; justify-content:center;">
            <i class="ti ti-paw" style="font-size:14px; color:white;" aria-hidden="true" />
          </div>
          TWolf.bet
        </div>
        <p>Your trusted iGaming platform. Bet responsibly and enjoy the thrill of fair games on our platform. 18+ only.</p>
      </div>

      <div v-for="col in footerLinks" :key="col.title">
        <div class="footer-col-title">{{ col.title }}</div>
        <div class="footer-links">
          <span v-for="link in col.links" :key="link" class="footer-link">{{ link }}</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <span class="footer-copy">© 2024 TWolf.bet. All rights reserved.</span>
      <div class="footer-payments">
        <div v-for="p in payments" :key="p" class="payment-badge">
          <i class="ti ti-currency-bitcoin" style="font-size:11px;" aria-hidden="true" />
          {{ p }}
        </div>
      </div>
      <div class="footer-social">
        <div v-for="s in socials" :key="s.icon" class="social-btn">
          <i :class="`ti ${s.icon}`" aria-hidden="true" />
        </div>
      </div>
    </div>

    <div class="ticker-bar">
      <div v-for="coin in tickers" :key="coin.symbol" class="ticker-item">
        <span class="ticker-coin">{{ coin.symbol }}</span>
        <span class="ticker-price">{{ coin.price }}</span>
        <span class="ticker-change" :class="coin.up ? 'up' : 'down'">
          {{ coin.up ? '+' : '' }}{{ coin.change }}%
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup>
const footerLinks = [
  { title: 'iGaming', links: ['Slots', 'Table Games', 'Live Casino', 'Provably Fair', 'Lottery'] },
  { title: 'Promotions', links: ['Welcome Bonus', 'VIP Program', 'Rakeback', 'Giveaways', 'Tournaments'] },
  { title: 'About Us', links: ['About', 'Careers', 'Blog', 'Provably Fair', 'Responsible Gaming'] },
  { title: 'Help', links: ['FAQ', 'Support', 'Terms of Service', 'Privacy Policy', 'AML Policy'] },
]

const payments = ['BTC', 'ETH', 'USDT', 'LTC', 'BNB']

const socials = [
  { icon: 'ti-brand-twitter' },
  { icon: 'ti-brand-telegram' },
  { icon: 'ti-brand-discord' },
  { icon: 'ti-brand-instagram' },
]

const tickers = [
  { symbol: 'BTC',  price: '$29,418.00', change: '1.2',  up: true },
  { symbol: 'ETH',  price: '$1,840.50',  change: '0.8',  up: true },
  { symbol: 'USDT', price: '$1.00',      change: '0.01', up: false },
  { symbol: 'LTC',  price: '$84.30',     change: '2.1',  up: true },
  { symbol: 'BNB',  price: '$243.10',    change: '0.5',  up: false },
  { symbol: 'XRP',  price: '$0.52',      change: '1.8',  up: true },
]
</script>
