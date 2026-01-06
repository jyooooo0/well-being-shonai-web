import { Home } from './pages/Home.js';
import { About } from './pages/About.js';
import { Experience } from './pages/Experience.js';
import { Story } from './pages/Story.js';
import { News } from './pages/News.js';
import { Contact } from './pages/Contact.js';
import { initAnimations } from './utils/animations.js';

const routes = {
    '/': Home,
    '/about': About,
    '/experience': Experience,
    '/story': Story,
    '/news': News,
    '/contact': Contact,
};

let currentPath = location.pathname;

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
        window.scrollTo(0, 0); // Ensure scroll reset happens here or before? 
        // If we scroll to 0, animations might trigger immediately. That's fine.
    }, 0);
}

export function initRouter() {
    // Handle navigation
    window.addEventListener('popstate', () => {
        currentPath = location.pathname;
        refresh();
    });

    // Intercept clicks
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            history.pushState(null, null, e.target.href);
            currentPath = e.target.getAttribute('href'); // Use getAttribute to match route keys
            refresh();
            window.scrollTo(0, 0);
        }
    });

    // Initial render
    currentPath = location.pathname;
    refresh();
}
