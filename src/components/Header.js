import { setLang, getLang } from '../i18n.js';
import { refresh } from '../router.js';

export function renderHeader() {
    const header = document.getElementById('main-header');
    const lang = getLang();

    header.innerHTML = `
    <div class="header-inner container" style="display: flex; justify-content: space-between; align-items: center; height: 80px;">
      <div class="logo">
        <a href="/" data-link style="font-family: var(--font-serif); font-size: 1.5rem; letter-spacing: 0.1em; font-weight: bold; text-decoration:none;">
          Well-Being Shonai
        </a>
      </div>
      <nav>
        <ul style="display: flex; list-style: none; gap: 20px;">
          <li><a href="/about" data-link>ABOUT</a></li>
          <li><a href="/experience" data-link>EXPERIENCE</a></li>
          <li><a href="/story" data-link>STORY</a></li>
          <li><a href="/news" data-link>NEWS</a></li>
          <li><a href="/contact" data-link>CONTACT</a></li>
        </ul>
      </nav>
      <div class="lang-switch" style="cursor: pointer; font-family: sans-serif; font-size: 0.9rem;">
        <span id="lang-jp" style="${lang === 'ja' ? 'font-weight:bold; text-decoration:underline;' : 'color:#999;'}">JP</span>
        <span style="margin:0 5px;">/</span>
        <span id="lang-en" style="${lang === 'en' ? 'font-weight:bold; text-decoration:underline;' : 'color:#999;'}">EN</span>
      </div>
    </div>
  `;

    // Sticky Styles (re-applied or handled in CSS)
    header.style.position = 'fixed';
    header.style.top = '0';
    header.style.width = '100%';
    header.style.zIndex = '100';
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    header.style.backdropFilter = 'blur(10px)';
    header.style.borderBottom = '1px solid rgba(0,0,0,0.05)';

    // Events
    document.getElementById('lang-jp').addEventListener('click', () => {
        setLang('ja');
        renderHeader(); // Re-render header to update bold state
        refresh();      // Re-render page content
    });

    document.getElementById('lang-en').addEventListener('click', () => {
        setLang('en');
        renderHeader();
        refresh();
    });
}
