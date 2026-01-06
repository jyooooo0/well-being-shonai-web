export const dictionary = {
    ja: {
        // Header
        nav_about: 'ABOUT',
        nav_exp: 'EXPERIENCE',
        nav_story: 'STORY',
        nav_news: 'NEWS',
        nav_contact: 'CONTACT',

        // Home
        home_title: '庄内の「立ち返る力」を、<br>世界に循環させる',
        home_subtitle: 'We circulate the "Power to Return" of Shonai to the world.',
        vision_title: 'Vision',
        vision_text: '緑と水、そして山々に囲まれた聖地、庄内。<br>ここは古来より「再生」の場所とされてきました。<br>私たちはこの土地に宿る精神性を現代に翻訳し、<br>世界中の人々が本来の自分に立ち返る場所を作ります。',
        latest_news: 'Latest News',

        // About
        mission_title: 'Mission: 立ち返る力',
        mission_text: '現代社会の中で失われつつある「静寂」と「自己との対話」。<br>庄内の宿坊文化と自然信仰をベースに、<br>心身をリセットし、新たな活力を得る体験を提供します。'
    },
    en: {
        // Header
        nav_about: 'ABOUT',
        nav_exp: 'EXPERIENCE',
        nav_story: 'STORY',
        nav_news: 'NEWS',
        nav_contact: 'CONTACT',

        // Home
        home_title: 'Circulate the "Power to Return" of Shonai to the World',
        home_subtitle: 'A platform for regeneration and connection.',
        vision_title: 'Vision',
        vision_text: 'Shonai, a sacred place surrounded by greenery, water, and mountains.<br>Since ancient times, this place has been known for "regeneration".<br>We translate the spirituality dwelling here for the modern age,<br>creating a place where people from around the world can return to their true selves.',
        latest_news: 'Latest News',

        // About
        mission_title: 'Mission: The Power to Return',
        mission_text: 'The "silence" and "dialogue with oneself" being lost in modern society.<br>Based on Shonai\'s Shukubo culture and nature worship,<br>we provide experiences to reset mind and body and gain new vitality.'
    }
};

let currentLang = 'ja';

export function getLang() {
    return currentLang;
}

export function setLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
}

export function t(key) {
    return dictionary[currentLang][key] || key;
}
