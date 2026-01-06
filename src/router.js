// Router.js
import { Home } from './pages/Home.js';
import { About } from './pages/About.js';
import { Experience } from './pages/Experience.js';
import { Story } from './pages/Story.js';
import { News } from './pages/News.js';
import { Contact } from './pages/Contact.js';
import { initAnimations } from './utils/animations.js';

const BASE_PATH = '/well-being-shonai-web';

const routes = {
    '/': Home,
    '/about': About,
    '/experience': Experience,
    '/story': Story,
    '/news': News,
    '/contact': Contact,
};

// Start relative
let currentPath = location.pathname.replace(BASE_PATH, '') || '/';

export function refresh() {
    const mainContent = document.getElementById('main-content');
    const component = routes[currentPath] || routes['/'];

    if (typeof component === 'function') {
        mainContent.innerHTML = component();
    } else {
        mainContent.innerHTML = '404 Not Found';
    }

    // Initialize animations for new content
    setTimeout(() => {
        initAnimations();
        window.scrollTo(0, 0);
    }, 0);
}

export function initRouter() {
    // Handle navigation
    window.addEventListener('popstate', () => {
        currentPath = location.pathname.replace(BASE_PATH, '') || '/';
        refresh();
    });

    // Intercept clicks
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            const href = e.target.getAttribute('href');
            history.pushState(null, null, href);
            currentPath = href.replace(BASE_PATH, '') || '/';
            refresh();
            window.scrollTo(0, 0);
        }
    });

    // Initial render
    currentPath = location.pathname.replace(BASE_PATH, '') || '/';
    refresh();
}
