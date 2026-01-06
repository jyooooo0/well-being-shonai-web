export function News() {
    // In a real app we would fetch this from a JSON file in src/data/
    const newsItems = [
        { date: '2024.01.01', title: 'Webサイトを公開しました', category: 'Info' },
        { date: '2023.12.15', title: '出羽三山ツアーの予約受付を開始しました', category: 'Event' },
        { date: '2023.11.20', title: '冬季休業のお知らせ', category: 'Info' }
    ];

    return `
    <div class="page-news container" style="padding-top: 100px;">
      <h1 class="fade-in" style="font-family: var(--font-serif); margin-bottom: var(--spacing-lg);">News / Activities</h1>
      
      <ul class="news-list" style="list-style: none;">
        ${newsItems.map((item, index) => `
          <li class="fade-in" style="padding: 20px 0; border-bottom: 1px solid #eee; display: flex; gap: 20px; align-items: baseline; animation-delay: ${index * 0.1}s;">
            <span style="font-family: var(--font-base); font-size: 0.9rem; color: #888; min-width: 100px;">${item.date}</span>
            <span style="font-size: 0.8rem; padding: 2px 8px; background: #eee; border-radius: 4px;">${item.category}</span>
            <a href="#" style="font-size: 1.1rem;">${item.title}</a>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
}
