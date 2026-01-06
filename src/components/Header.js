import { setLang, getLang } from '../i18n.js';
import { refresh } from '../router.js';

export function renderHeader() {
  const header = document.getElementById('main-header');
  const lang = getLang();

  header.innerHTML = `
    <div class="header-inner container" style="display: flex; justify-content: space-between; align-items: center; height: 80px; position: relative; z-index: 201;">
      <div class="logo">
        <a href="/" data-link style="font-family: var(--font-serif); font-size: 1.5rem; letter-spacing: 0.1em; font-weight: bold; text-decoration:none;">
          Well-Being Shonai
        </a>
      </div>
      
      <!-- Desktop Nav -->
      <nav>
        <ul style="display: flex; list-style: none; gap: 20px;">
          <li><a href="/about" data-link>ABOUT</a></li>
          <li><a href="/experience" data-link>EXPERIENCE</a></li>
          <li><a href="/story" data-link>STORY</a></li>
          <li><a href="/news" data-link>NEWS</a></li>
          <li><a href="/contact" data-link>CONTACT</a></li>
        </ul>
      </nav>

      <!-- Mobile Menu Button -->
      <button class="mobile-menu-btn" style="display: none; background: none; border: none; cursor: pointer; z-index: 202;">
        <div style="width: 30px; height: 2px; background: #333; margin: 6px 0;"></div>
        <div style="width: 30px; height: 2px; background: #333; margin: 6px 0;"></div>
        <div style="width: 30px; height: 2px; background: #333; margin: 6px 0;"></div>
      </button>

      <div class="lang-switch" style="cursor: pointer; font-family: sans-serif; font-size: 0.9rem; margin-left: 15px;">
        <span id="lang-jp" style="${lang === 'ja' ? 'font-weight:bold; text-decoration:underline;' : 'color:#999;'}">JP</span>
        <span style="margin:0 5px;">/</span>
        <span id="lang-en" style="${lang === 'en' ? 'font-weight:bold; text-decoration:underline;' : 'color:#999;'}">EN</span>
      </div>
    </div>

    <!-- Mobile Overlay -->
    <div class="mobile-nav-overlay">
        <a href="/about" data-link>ABOUT</a>
        <a href="/experience" data-link>EXPERIENCE</a>
        <a href="/story" data-link>STORY</a>
        <a href="/news" data-link>NEWS</a>
        <a href="/contact" data-link>CONTACT</a>
        <div style="margin-top: 30px; cursor: pointer;">
            <span onclick="document.getElementById('lang-jp').click()">JP</span> / 
            <span onclick="document.getElementById('lang-en').click()">EN</span>
        </div>
    </div>
  `;

  // Sticky Styles
  header.style.position = 'fixed';
  header.style.top = '0';
  header.style.width = '100%';
  header.style.zIndex = '100';
  header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)'; // Slightly more opaque
  header.style.backdropFilter = 'blur(10px)';
  header.style.borderBottom = '1px solid rgba(0,0,0,0.05)';

  // Desktop Language Switch Logic
  const handleLangSwitch = (targetLang) => {
    if (getLang() !== targetLang) {
      setLang(targetLang);
      renderHeader();
      refresh();
    }
  };

  document.getElementById('lang-jp').addEventListener('click', () => handleLangSwitch('ja'));
  document.getElementById('lang-en').addEventListener('click', () => handleLangSwitch('en'));

  // Mobile Menu Logic
  const menuBtn = header.querySelector('.mobile-menu-btn');
  const overlay = header.querySelector('.mobile-nav-overlay');

  menuBtn.addEventListener('click', () => {
    overlay.classList.toggle('active');
    // Toggle Styles for 'X' could go here if refined
  });

  // Close menu when a link is clicked
  overlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      overlay.classList.remove('active');
    });
  });
}
