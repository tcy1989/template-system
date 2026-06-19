<template>
  <div class="cloak-page">

    <!-- ── Top contact bar ── -->
    <div class="cloak-topbar">
      <div class="cloak-topbar-left">
        <span class="cloak-topbar-item">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          21 King Street, Melbourne
        </span>
        <span class="cloak-topbar-item">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.93 6.94l1.51-1.52a2 2 0 012.11-.44c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          +61 2 1234 5678
        </span>
        <span class="cloak-topbar-item">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          info@webteck.com
        </span>
      </div>
      <div class="cloak-topbar-right">
        <span class="cloak-topbar-label">Follow Us On:</span>
        <div class="cloak-social-btn">f</div>
        <div class="cloak-social-btn">in</div>
        <div class="cloak-social-btn">t</div>
        <div class="cloak-social-btn">yt</div>
      </div>
    </div>

    <!-- ── Main navigation ── -->
    <nav class="cloak-nav">
      <div class="cloak-logo">
        <div class="cloak-logo-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </div>
        WebTeck
      </div>
      <div class="cloak-nav-links">
        <span class="cloak-nav-link active">Home</span>
        <span class="cloak-nav-link">About Us</span>
        <span class="cloak-nav-link">Services</span>
        <span class="cloak-nav-link">Pages</span>
        <span class="cloak-nav-link">Blog</span>
        <span class="cloak-nav-link">Contact Us</span>
      </div>
      <div class="cloak-nav-actions">
        <button class="cloak-nav-icon-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </button>
        <button class="cloak-nav-icon-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
        </button>
        <button class="cloak-nav-cta" @click="goToRedirect">MAKE APPOINTMENT</button>
      </div>
    </nav>

    <!-- ── Hero section ── -->
    <section class="cloak-hero">
      <div class="cloak-hero-blob"></div>
      <div class="cloak-hero-blob-2"></div>

      <div class="cloak-hero-content">
        <div class="cloak-hero-eyebrow">
          <span class="cloak-hero-eyebrow-dot"></span>
          BEST MARKETING SERVICE
        </div>
        <h1 class="cloak-hero-title">
          Make The Easiest<br>
          Solution <span style="color:var(--cloak-purple)">For You</span>
        </h1>
        <p class="cloak-hero-desc">
          We deliver innovative digital solutions that help businesses grow, adapt, and
          succeed in an ever-evolving technological landscape. Your success is our mission.
        </p>
        <div class="cloak-hero-buttons">
          <button class="cloak-btn-primary" @click="goToRedirect">ABOUT US</button>
          <div class="cloak-btn-play" @click="goToRedirect" style="cursor:pointer;">
            <div class="cloak-play-icon">▶</div>
            Subscribe Now
          </div>
        </div>
      </div>

      <!-- Generated hero banner illustration (SVG) -->
      <div class="cloak-hero-visual">
        <svg viewBox="0 0 520 420" xmlns="http://www.w3.org/2000/svg" class="cloak-hero-svg">
          <!-- bg blob -->
          <ellipse cx="280" cy="220" rx="220" ry="195" fill="#E8E2FF" opacity="0.85"/>
          <ellipse cx="320" cy="200" rx="160" ry="150" fill="#D9D2FF" opacity="0.6"/>

          <!-- floating deco dots -->
          <circle cx="70" cy="60" r="10" fill="#B8ACFF" opacity="0.5"/>
          <circle cx="460" cy="340" r="14" fill="#C5BBFF" opacity="0.4"/>
          <circle cx="480" cy="70" r="7" fill="#9B59E8" opacity="0.3"/>
          <circle cx="40" cy="320" r="18" fill="#D9D2FF" opacity="0.35"/>

          <!-- isometric desk surface -->
          <polygon points="160,280 320,200 480,280 320,360" fill="#EDE8FF" stroke="#C5BBFF" stroke-width="1.5"/>
          <polygon points="160,280 320,360 320,390 160,310" fill="#C5BBFF" stroke="#B0A5FF" stroke-width="1"/>
          <polygon points="480,280 320,360 320,390 480,310" fill="#B0A5FF" stroke="#9B8FFF" stroke-width="1"/>

          <!-- laptop on desk -->
          <polygon points="250,230 330,195 390,225 310,260" fill="#7C5CCC" stroke="#6B3FD4" stroke-width="1"/>
          <polygon points="250,230 310,260 310,285 250,255" fill="#5A3FAA" stroke="#6B3FD4" stroke-width="1"/>
          <polygon points="310,260 390,225 390,250 310,285" fill="#6B50BB" stroke="#6B3FD4" stroke-width="1"/>
          <!-- screen -->
          <polygon points="258,226 330,193 384,221 312,254" fill="#2A1A5E"/>
          <polygon points="264,225 330,196 378,221 312,250" fill="#1E1540"/>
          <!-- screen glow -->
          <polygon points="272,222 330,200 370,219 312,241" fill="#6B3FD4" opacity="0.6"/>
          <line x1="300" y1="220" x2="350" y2="210" stroke="#9B59E8" stroke-width="1.5" opacity="0.8"/>
          <line x1="294" y1="228" x2="344" y2="218" stroke="#9B59E8" stroke-width="1" opacity="0.5"/>
          <line x1="306" y1="234" x2="356" y2="224" stroke="#9B59E8" stroke-width="1" opacity="0.5"/>

          <!-- person 1 (left, standing) -->
          <circle cx="200" cy="170" r="18" fill="#FBBF8A"/>
          <rect x="186" y="188" width="28" height="44" rx="8" fill="#6B3FD4"/>
          <rect x="178" y="192" width="14" height="32" rx="7" fill="#5A2FB0"/>
          <rect x="200" y="192" width="14" height="32" rx="7" fill="#7C45D8"/>
          <rect x="190" y="232" width="12" height="28" rx="6" fill="#4A3570"/>
          <rect x="204" y="232" width="12" height="28" rx="6" fill="#4A3570"/>
          <!-- hair -->
          <path d="M184 168 Q200 155 216 168" fill="#3D2B0A"/>

          <!-- person 2 (right, kneeling/working) -->
          <circle cx="400" cy="188" r="16" fill="#F5A981"/>
          <rect x="388" y="204" width="24" height="38" rx="8" fill="#9B59E8"/>
          <rect x="382" y="208" width="12" height="26" rx="6" fill="#8B45D8"/>
          <rect x="400" y="208" width="12" height="26" rx="6" fill="#AA65F8"/>
          <!-- arm reaching to desk -->
          <line x1="382" y1="216" x2="355" y2="238" stroke="#8B45D8" stroke-width="9" stroke-linecap="round"/>
          <circle cx="350" cy="240" r="7" fill="#F5A981"/>

          <!-- floating puzzle pieces -->
          <!-- piece 1 -->
          <g transform="translate(105,140) rotate(-15)">
            <path d="M0,0 L30,0 Q30,12 42,12 Q30,12 30,24 L0,24 Q0,12 -12,12 Q0,12 0,0Z" fill="#9B59E8" opacity="0.75"/>
          </g>
          <!-- piece 2 -->
          <g transform="translate(430,130) rotate(20)">
            <path d="M0,0 L28,0 Q28,11 39,11 Q28,11 28,22 L0,22 Q0,11 -11,11 Q0,11 0,0Z" fill="#6B3FD4" opacity="0.6"/>
          </g>
          <!-- piece 3 -->
          <g transform="translate(135,320) rotate(-10)">
            <path d="M0,0 L22,0 Q22,9 31,9 Q22,9 22,18 L0,18 Q0,9 -9,9 Q0,9 0,0Z" fill="#B8ACFF" opacity="0.65"/>
          </g>
          <!-- piece 4 small -->
          <g transform="translate(460,180) rotate(35)">
            <path d="M0,0 L18,0 Q18,7 25,7 Q18,7 18,14 L0,14 Q0,7 -7,7 Q0,7 0,0Z" fill="#9B59E8" opacity="0.5"/>
          </g>

          <!-- checklist / paper -->
          <rect x="230" y="155" width="52" height="64" rx="5" fill="white" opacity="0.9"/>
          <line x1="238" y1="172" x2="274" y2="172" stroke="#D1D5DB" stroke-width="2"/>
          <line x1="238" y1="182" x2="274" y2="182" stroke="#D1D5DB" stroke-width="2"/>
          <line x1="238" y1="192" x2="260" y2="192" stroke="#D1D5DB" stroke-width="2"/>
          <circle cx="238" cy="164" r="4" fill="#6B3FD4"/>
          <polyline points="236,164 238,167 241,161" stroke="white" stroke-width="1.5" fill="none"/>
          <!-- checkmarks -->
          <circle cx="238" cy="172" r="4" fill="#6B3FD4"/>
          <polyline points="236,172 238,175 241,169" stroke="white" stroke-width="1.5" fill="none"/>
          <circle cx="238" cy="182" r="4" fill="#B8ACFF"/>

          <!-- upward arrow / growth chart -->
          <polyline points="340,330 355,310 370,318 390,295 405,302 420,275" stroke="#6B3FD4" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <polygon points="420,275 413,280 416,286" fill="#6B3FD4"/>
          <line x1="340" y1="335" x2="425" y2="335" stroke="#C5BBFF" stroke-width="1.5"/>

          <!-- small star accents -->
          <text x="145" y="200" font-size="14" fill="#FACC15" opacity="0.8">★</text>
          <text x="445" y="155" font-size="11" fill="#FACC15" opacity="0.7">★</text>
          <text x="430" y="370" font-size="9" fill="#9B59E8" opacity="0.6">★</text>
        </svg>
      </div>
    </section>

    <!-- ── About section ── -->
    <section class="cloak-about">
      <div class="cloak-img-wrap">
        <div class="cloak-img-circle">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" opacity="0.25">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
          </svg>
          <!-- decorative ring label -->
          <div style="position:absolute;bottom:24px;right:24px;background:var(--cloak-purple);color:white;border-radius:10px;padding:8px 14px;font-size:11px;font-weight:700;box-shadow:0 4px 16px rgba(108,63,212,0.4)">
            Team Photo
          </div>
        </div>
        <div class="cloak-img-play">▶</div>
      </div>

      <div class="cloak-about-content">
        <div class="cloak-about-eyebrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          ABOUT WEBTECK SOLUTIONS
        </div>
        <h2 class="cloak-about-title">
          We Are Increasing Business<br>
          Success With <span class="cloak-highlight">Technology</span>
        </h2>
        <p class="cloak-about-desc">
          With over 24 years in the industry, we have helped hundreds of businesses transform their
          digital presence. Our team of expert developers, designers, and analysts work together to
          deliver solutions that drive real results and lasting growth.
        </p>
        <div class="cloak-about-btns">
          <button class="cloak-btn-dark" @click="goToRedirect">LEARN MORE</button>
          <button class="cloak-btn-dark" @click="goToRedirect">OUR TEAM</button>
        </div>
        <div class="cloak-award-card">
          <div class="cloak-award-avatar">🏆</div>
          <div>
            <div class="cloak-award-title">Award Winning Company</div>
            <div class="cloak-award-sub">Best IT Solutions Provider 2024<br>Digital Innovation Excellence Award</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Services section (dark) ── -->
    <section class="cloak-services">
      <div class="cloak-services-header">
        <div>
          <div class="cloak-services-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            LATEST PROJECT
          </div>
          <h2 class="cloak-services-title">
            We Provide Exclusive Service<br>For Your Business
          </h2>
        </div>
        <button class="cloak-btn-outline" @click="goToRedirect">EXPLORE SERVICES →</button>
      </div>

      <div class="cloak-service-grid">
        <div class="cloak-service-card" v-for="service in services" :key="service.title">
          <div class="cloak-service-icon">{{ service.icon }}</div>
          <div class="cloak-service-title">{{ service.title }}</div>
          <div class="cloak-service-desc">{{ service.desc }}</div>
          <button class="cloak-service-link" @click="goToRedirect">FIND MORE →</button>
        </div>
      </div>
    </section>

    <!-- ── Experience section ── -->
    <section class="cloak-experience">
      <div class="cloak-exp-content">
        <div class="cloak-exp-eyebrow">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          WHY CHOOSE US
        </div>
        <h2 class="cloak-exp-title">
          More Than <span class="cloak-highlight">24+ Years</span><br>
          Experience We Provide<br>IT Services
        </h2>
        <p class="cloak-exp-desc">
          Our deep expertise and proven track record make us the trusted partner for businesses
          ready to leverage technology for sustainable growth and competitive advantage.
        </p>
        <div class="cloak-exp-features">
          <div class="cloak-exp-feature" v-for="feature in features" :key="feature.title">
            <div class="cloak-exp-feature-icon">✓</div>
            <div>
              <div class="cloak-exp-feature-title">{{ feature.title }}</div>
              <div class="cloak-exp-feature-sub">{{ feature.sub }}</div>
            </div>
          </div>
        </div>
        <button class="cloak-btn-primary" @click="goToRedirect">LEARN MORE</button>
      </div>

      <div class="cloak-img-right">
        <div class="cloak-img-circle-right">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.2">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
          <div style="position:absolute;bottom:28px;right:20px;background:var(--cloak-purple);color:white;border-radius:10px;padding:8px 14px;font-size:11px;font-weight:700;box-shadow:0 4px 16px rgba(108,63,212,0.4)">
            Our Team
          </div>
        </div>
        <div class="cloak-stat-badge">
          <div class="cloak-stat-num">10k+</div>
          <div class="cloak-stat-label">Happy Clients</div>
        </div>
      </div>
    </section>

    <!-- ── Footer ── -->
    <footer class="cloak-footer">
      <div class="cloak-footer-copy">© 2024 WebTeck Solutions. All rights reserved.</div>
      <div class="cloak-footer-links">
        <span class="cloak-footer-link">Privacy Policy</span>
        <span class="cloak-footer-link">Terms of Service</span>
        <span class="cloak-footer-link">Support</span>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { useConfigStore } from '@/stores/config.js'

const config = useConfigStore()

function goToRedirect() {
  const url = config.cloaking?.templateCtaUrl
  if (url) window.open(url, '_blank')
}

const services = [
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'We craft intuitive interfaces and engaging user experiences that convert visitors into loyal customers.',
  },
  {
    icon: '📣',
    title: 'Digital Marketing',
    desc: 'Data-driven campaigns across search, social, and content channels to grow your brand and revenue.',
  },
  {
    icon: '📊',
    title: 'Business Analysis',
    desc: 'In-depth research and strategic insights to align your technology investments with business goals.',
  },
  {
    icon: '💻',
    title: 'Software Services',
    desc: 'Custom web and mobile applications built with modern technologies to solve your unique challenges.',
  },
]

const features = [
  {
    title: 'Business Growth',
    sub: 'Proven strategies that scale your operations efficiently.',
  },
  {
    title: 'Quality Products',
    sub: 'Every solution is built to the highest industry standards.',
  },
  {
    title: 'Expert Support',
    sub: 'Dedicated team available to assist you every step.',
  },
  {
    title: 'Innovation First',
    sub: 'Cutting-edge tech stack tailored to your market.',
  },
]
</script>
