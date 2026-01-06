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
renderHeader();
renderFooter();
initRouter();
initCursor();
