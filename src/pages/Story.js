export function Story() {
  return `
    <div class="page-story container" style="padding-top: 100px;">
      <h1 class="fade-in" style="font-family: var(--font-serif); margin-bottom: var(--spacing-lg);">Story / Media</h1>
      
      <div class="media-list">
        <div class="media-item fade-in grid-responsive" style="margin-bottom: 60px; align-items: flex-start; gap: 40px;">
          <div class="img-col" style="flex: 1;">
              <img src="${ASSETS.LEGACY_MAIN}" style="width: 100%; height: auto; border-radius: 4px;">
          </div>
          <div class="media-content" style="flex: 1;">
            <h2 class="serif" style="font-size: 1.8rem; margin-bottom: 15px;">${t('story_booklet_title')}</h2>
            <p style="margin-bottom: 20px;">
              ${t('story_booklet_desc')}
            </p>
            <a href="#" style="text-decoration: underline;">${t('read_online')}</a>
          </div>
        </div>

         <div class="media-item fade-in grid-responsive" style="margin-bottom: 60px; align-items: flex-start; gap: 40px; direction: rtl;">
          <div class="img-col" style="flex: 1;">
              <img src="${ASSETS.YUDONO_MAIN}" style="width: 100%; height: auto; border-radius: 4px;">
          </div>
          <div class="media-content" style="flex: 1; direction: ltr;">
            <h2 class="serif" style="font-size: 1.8rem; margin-bottom: 15px;">${t('story_mummy_title')}</h2>
            <p style="margin-bottom: 20px;">
              ${t('story_mummy_desc')}
            </p>
             <a href="#" style="text-decoration: underline;">${t('read_story')}</a>
          </div>
        </div>
      </div>
    </div>
  `;
}
