import { setLang, getLang } from '../i18n.js';
import { refresh } from '../router.js';

export function renderHeader() {
  const header = document.getElementById('main-header');
  const lang = getLang();

  const BASE = '/well-being-shonai-web';

  header.innerHTML = `
    <style>
      /* Enforce Header Styles */
      @media (max-width: 900px) {
        .desktop-nav { display: none !important; }
        .header-controls { gap: 15px; }
        
        .mobile-nav-overlay {
            position: fixed;
            top: 0; 
            left: 0;
            width: 100%;
            height: 100dvh;
            background: #ffffff; 
            z-index: 998; 
            display: flex;
            flex-direction: column;
            justify-content: flex-start; /* Start from top */
            align-items: center;
            transform: translateY(-100%);
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            opacity: 0;
            pointer-events: none;
            padding-top: 100px; /* Clear the header (80px) + space */
        }
        .mobile-nav-overlay.active {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
        }
        .mobile-nav-overlay a {
            font-family: var(--font-serif);
            font-size: 1.25rem;
            margin: 0;
            padding: 10px 20px;
            color: var(--color-text);
            text-decoration: none;
            display: block;
        }
        .mobile-menu-btn { display: block !important; }
      }
      @media (min-width: 901px) {
        .mobile-nav-overlay { display: none !important; }
        .mobile-menu-btn { display: none !important; }
        .desktop-nav { display: block !important; }
      }
    </style>
    <div class="header-inner container" style="display: flex; justify-content: space-between; align-items: center; height: 80px; position: relative; z-index: 999;">
      
      <!-- Logo -->
      <div class="logo" style="flex-shrink: 0; margin-right: auto; z-index: 1000;">
        <a href="${BASE}/" data-link style="font-family: var(--font-serif); font-size: 1.5rem; letter-spacing: 0.1em; font-weight: bold; text-decoration:none; color: #333;">
          Well-Being Shonai
        </a>
      </div>
      
      <!-- Desktop Nav -->
      <nav class="desktop-nav">
        <ul style="display: flex; list-style: none; gap: 30px; align-items: center; margin: 0;">
          <li><a href="${BASE}/about" data-link>${t('nav_about')}</a></li>
          <li><a href="${BASE}/experience" data-link>${t('nav_exp')}</a></li>
          <li><a href="${BASE}/story" data-link>${t('nav_story')}</a></li>
          <li><a href="${BASE}/news" data-link>${t('nav_news')}</a></li>
          <li><a href="${BASE}/contact" data-link>${t('nav_contact')}</a></li>
          <!-- Desktop Lang Switch (Integrated) -->
          <li class="desktop-lang-switch">
             <span id="lang-jp-d" style="cursor:pointer; ${lang === 'ja' ? 'font-weight:bold; border-bottom:1px solid #333;' : 'opacity:0.6;'}">JP</span> / 
             <span id="lang-en-d" style="cursor:pointer; ${lang === 'en' ? 'font-weight:bold; border-bottom:1px solid #333;' : 'opacity:0.6;'}">EN</span>
          </li>
        </ul>
      </nav>

      <!-- Mobile Controls (Button Only on wrapper, Lang inside overlay or customized) -->
      <div class="header-controls" style="display: flex; align-items: center; z-index: 1000;">
          <!-- Mobile Menu Button -->
          <button class="mobile-menu-btn" style="display: none; background: none; border: none; cursor: pointer; padding: 10px;">
            <div class="hamburger-line" style="width: 24px; height: 2px; background: #333; margin: 5px 0; transition: 0.3s;"></div>
            <div class="hamburger-line" style="width: 24px; height: 2px; background: #333; margin: 5px 0; transition: 0.3s;"></div>
            <div class="hamburger-line" style="width: 24px; height: 2px; background: #333; margin: 5px 0; transition: 0.3s;"></div>
          </button>
      </div>
    </div>

    <!-- Mobile Overlay -->
    <div class="mobile-nav-overlay">
        <nav style="text-align: center; display: flex; flex-direction: column; gap: 15px;">
          <a href="${BASE}/about" data-link>${t('nav_about')}</a>
          <a href="${BASE}/experience" data-link>${t('nav_exp')}</a>
          <a href="${BASE}/story" data-link>${t('nav_story')}</a>
          <a href="${BASE}/news" data-link>${t('nav_news')}</a>
          <a href="${BASE}/contact" data-link>${t('nav_contact')}</a>
        </nav>
        
        <div style="margin-top: 30px; font-size: 1.1rem;">
            <span id="lang-jp-m" style="cursor:pointer; padding: 10px; ${lang === 'ja' ? 'font-weight:bold; text-decoration:underline;' : ''}">JP</span>
            <span style="opacity:0.5">|</span>
            <span id="lang-en-m" style="cursor:pointer; padding: 10px; ${lang === 'en' ? 'font-weight:bold; text-decoration:underline;' : ''}">EN</span>
        </div>
    </div>
  `;

  // Sticky Styles
  header.style.position = 'fixed';
  header.style.top = '0';
  header.style.width = '100%';
  header.style.zIndex = '1000';
  header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
  header.style.backdropFilter = 'blur(10px)';
  header.style.borderBottom = '1px solid rgba(0,0,0,0.05)';

  // Handler
  const handleLangSwitch = (targetLang) => {
    if (getLang() !== targetLang) {
      setLang(targetLang);
      renderHeader();
      refresh();
    }
  };

  // Bind Events (use regex or checks to avoid null errors if elements hidden)
  const bind = (id, l) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', () => handleLangSwitch(l));
  }
  bind('lang-jp-d', 'ja'); bind('lang-en-d', 'en');
  bind('lang-jp-m', 'ja'); bind('lang-en-m', 'en');

  // Mobile Menu Logic
  const menuBtn = header.querySelector('.mobile-menu-btn');
  const overlay = header.querySelector('.mobile-nav-overlay');

  // Animation state
  let isOpen = false;

  menuBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    overlay.classList.toggle('active');

    // Animate Hamburger
    const lines = menuBtn.querySelectorAll('.hamburger-line');
    if (isOpen) {
      lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      lines[1].style.opacity = '0';
      lines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      lines[0].style.transform = 'none';
      lines[1].style.opacity = '1';
      lines[2].style.transform = 'none';
    }
  });

  // Close menu when a link is clicked
  overlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      isOpen = false;
      overlay.classList.remove('active');
      const lines = menuBtn.querySelectorAll('.hamburger-line');
      lines[0].style.transform = 'none';
      lines[1].style.opacity = '1';
      lines[2].style.transform = 'none';
    });
  });
}
