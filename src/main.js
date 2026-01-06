import './styles/global.css';
import { initRouter } from './router.js';
import { initCursor } from './utils/cursor.js';
import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';

document.querySelector('#app').innerHTML = `
  <header id="main-header"></header>
  <main id="main-content"></main>
  <footer id="main-footer"></footer>
`;

// Initialize features
import { dictionary, t, setLang } from './i18n.js';
import { ASSETS } from './utils/assets_map.js';

// Expose to global scope for pages
window.t = t;
window.ASSETS = ASSETS;
window.dictionary = dictionary;

renderHeader();
renderFooter();
initRouter();
initCursor();
