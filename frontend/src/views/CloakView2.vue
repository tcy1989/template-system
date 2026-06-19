<template>
  <div class="amz-page">

    <!-- ── Nav ── -->
    <nav class="amz-nav">
      <div class="amz-logo">
        <div class="amz-logo-icon"></div>
        AMZ Marketer
      </div>
      <div class="amz-nav-links">
        <span class="amz-nav-link">Home</span>
        <span class="amz-nav-link">Replay Vault</span>
        <span class="amz-nav-link">Features</span>
        <span class="amz-nav-link">Pricing</span>
        <span class="amz-nav-link">About</span>
        <span class="amz-nav-link">Contact</span>
      </div>
      <button class="amz-nav-cta" @click="goToRedirect">Get Access Now</button>
    </nav>

    <!-- ── Hero ── -->
    <section class="amz-hero">
      <!-- Left: text -->
      <div class="amz-hero-content">
        <div class="amz-hero-badge">
          <span class="amz-hero-badge-dot"></span>
          AI-POWERED LEARNING FOR E-COMMERCE GROWTH
        </div>
        <h1 class="amz-hero-title">
          Learn. Apply.<br>
          <span class="amz-purple-text">Grow Your<br>E-commerce<br>Business.</span>
        </h1>
        <p class="amz-hero-desc">
          Get unlimited access to the Ecom Mastery AI Replay Vault and learn proven strategies
          from top Amazon &amp; e-commerce experts.
        </p>
        <div class="amz-hero-buttons">
          <button class="amz-btn-primary" @click="goToRedirect">Explore Replay Vault →</button>
          <button class="amz-btn-ghost" @click="goToRedirect">
            <div class="amz-btn-ghost-play">▶</div>
            Watch Demo
          </button>
        </div>
        <div class="amz-social-proof">
          <div class="amz-avatars">
            <div class="amz-avatar">A</div>
            <div class="amz-avatar">B</div>
            <div class="amz-avatar">C</div>
            <div class="amz-avatar">D</div>
          </div>
          <div class="amz-social-text">
            <div class="amz-stars">★★★★★</div>
            Join 5,000+ sellers growing their<br>business with AMZ Marketer
          </div>
        </div>
      </div>

      <!-- Center: hero photo placeholder -->
      <div class="amz-hero-img">
        <span class="amz-hero-deco-star" style="top:20px;left:10px">✦</span>
        <span class="amz-hero-deco-star" style="top:60px;right:20px;font-size:14px">✦</span>
        <div class="amz-hero-photo">
          <!-- Person silhouette -->
          <svg class="amz-hero-person" viewBox="0 0 180 320" width="180" xmlns="http://www.w3.org/2000/svg">
            <!-- Head -->
            <ellipse cx="90" cy="56" rx="38" ry="44" fill="#FBBF8A"/>
            <!-- Hair -->
            <path d="M54 44 Q60 20 90 18 Q120 20 126 44 Q115 30 90 28 Q65 30 54 44Z" fill="#2D1B0E"/>
            <!-- Ears -->
            <ellipse cx="52" cy="60" rx="8" ry="10" fill="#F5A981"/>
            <ellipse cx="128" cy="60" rx="8" ry="10" fill="#F5A981"/>
            <!-- Neck -->
            <rect x="76" y="96" width="28" height="24" rx="4" fill="#FBBF8A"/>
            <!-- Shirt (purple) -->
            <path d="M30 140 L50 112 Q70 108 90 110 Q110 108 130 112 L150 140 L155 220 L25 220Z" fill="#7C3AED"/>
            <!-- Collar -->
            <path d="M78 110 L90 130 L102 110" fill="white" opacity="0.9"/>
            <!-- Arms -->
            <path d="M30 140 Q10 170 20 210 Q30 215 38 210 Q32 180 45 158Z" fill="#7C3AED"/>
            <path d="M150 140 Q170 170 160 210 Q150 215 142 210 Q148 180 135 158Z" fill="#7C3AED"/>
            <!-- Crossed arm detail -->
            <path d="M38 195 Q90 185 142 195" stroke="#6D28D9" stroke-width="3" fill="none"/>
            <!-- Hands -->
            <ellipse cx="26" cy="214" rx="12" ry="10" fill="#FBBF8A"/>
            <ellipse cx="154" cy="214" rx="12" ry="10" fill="#FBBF8A"/>
            <!-- Pants -->
            <rect x="42" y="220" width="96" height="100" rx="4" fill="#1F2937"/>
          </svg>
        </div>
      </div>

      <!-- Right: stat cards -->
      <div class="amz-hero-stats">
        <div class="amz-stat-card" v-for="stat in stats" :key="stat.label">
          <div class="amz-stat-icon">{{ stat.icon }}</div>
          <div>
            <div class="amz-stat-num">{{ stat.num }}</div>
            <div class="amz-stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Trusted brands ── -->
    <div class="amz-brands">
      <div class="amz-brands-label">Trusted by e-commerce brands and sellers worldwide</div>
      <div class="amz-brands-logos">
        <div class="amz-brand-item">amazon</div>
        <div class="amz-brand-item">⚙ Helium 10</div>
        <div class="amz-brand-item">JungleScout</div>
        <div class="amz-brand-item">sellerboard</div>
        <div class="amz-brand-item">◇ Keepa</div>
        <div class="amz-brand-item">↗ viral launch</div>
      </div>
    </div>

    <!-- ── Features ── -->
    <section class="amz-features">
      <h2 class="amz-section-title">Everything you need to scale on Amazon &amp; beyond</h2>
      <div class="amz-features-grid">
        <div class="amz-feature-card" v-for="f in features" :key="f.title">
          <div class="amz-feature-icon">{{ f.icon }}</div>
          <div class="amz-feature-title">{{ f.title }}</div>
          <div class="amz-feature-desc">{{ f.desc }}</div>
        </div>
      </div>
    </section>

    <!-- ── Replay Vault ── -->
    <section class="amz-vault">
      <div class="amz-vault-header">
        <div class="amz-vault-eyebrow">Inside the Replay Vault</div>
        <div class="amz-vault-sub">One vault. Unlimited growth.</div>
      </div>
      <div class="amz-vault-ui">
        <div class="amz-vault-search">
          <span class="amz-vault-search-icon">🔍</span>
          Search topics, speakers, or keywords...
        </div>
        <div class="amz-vault-body">
          <div class="amz-vault-topics">
            <div class="amz-vault-topic-label">All Topics</div>
            <div
              class="amz-vault-topic-item"
              :class="{ active: activeTopic === t }"
              v-for="t in topics"
              :key="t"
              @click="activeTopic = t"
            >{{ t }}</div>
          </div>
          <div class="amz-vault-videos">
            <div class="amz-video-row" v-for="v in videos" :key="v.title">
              <div class="amz-video-thumb">▶</div>
              <div class="amz-video-info">
                <div class="amz-video-title">{{ v.title }}</div>
                <div class="amz-video-meta">
                  <div class="amz-video-avatar">{{ v.avatar }}</div>
                  {{ v.host }} · {{ v.duration }}
                </div>
              </div>
              <button class="amz-watch-btn" @click="goToRedirect">Watch</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Bottom CTA ── -->
    <section class="amz-cta">
      <div class="amz-cta-left">
        <div class="amz-cta-icon">🏆</div>
        <div>
          <div class="amz-cta-title">Learn from the best.<br>Grow faster with AI.</div>
          <div class="amz-cta-sub">
            Join thousands of Amazon sellers and e-commerce entrepreneurs leveling up their business.
          </div>
        </div>
      </div>
      <div class="amz-cta-right">
        <button class="amz-btn-access" @click="goToRedirect">Get Instant Access →</button>
        <div class="amz-guarantee">✓ 14-Day Money-Back Guarantee</div>
      </div>
    </section>

    <!-- ── Footer ── -->
    <footer class="amz-footer">
      <div class="amz-footer-copy">© 2024 AMZ Marketer. All rights reserved.</div>
      <div class="amz-footer-links">
        <span class="amz-footer-link">Privacy Policy</span>
        <span class="amz-footer-link">Terms</span>
        <span class="amz-footer-link">Support</span>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useConfigStore } from '@/stores/config.js'

const config = useConfigStore()

function goToRedirect() {
  const url = config.cloaking?.redirectUrl
  if (url) window.open(url, '_blank')
}

const activeTopic = ref('Product Research')

const stats = [
  { icon: '▶', num: '150+', label: 'Hours of Content' },
  { icon: '👥', num: '50+',  label: 'Top Experts' },
  { icon: '⭐', num: '5,000+', label: 'Active Members' },
]

const features = [
  { icon: '▶', title: 'Full Event Recordings',    desc: 'Watch every session, keynote, and workshop.' },
  { icon: '📄', title: 'Slide Decks',             desc: 'Download all presentation slides and resources.' },
  { icon: '🔍', title: 'Searchable Transcripts',  desc: 'Find exactly what you need in seconds.' },
  { icon: '✦',  title: 'AI Summaries',            desc: 'Get AI-generated summaries of every session.' },
  { icon: '💡', title: 'Actionable Nuggets',       desc: 'Key takeaways and proven strategies.' },
  { icon: '💬', title: 'Roundtable Discussions',   desc: 'Exclusive expert roundtables and Q&A sessions.' },
]

const topics = [
  'Product Research', 'PPC & Advertising', 'Brand Building',
  'AI & Automation', 'Operations', 'Scaling & Growth',
]

const videos = [
  { title: 'AI Strategies for E-commerce Growth', host: 'Ryan King',      avatar: 'RK', duration: '48:32' },
  { title: 'Amazon PPC Mastery in 2024',          host: 'Elizabeth Green', avatar: 'EG', duration: '38:17' },
  { title: 'Building a 7-Figure Brand on Amazon', host: 'Mark Chen',       avatar: 'MC', duration: '52:08' },
]
</script>
