export function Story() {
    return `
    <div class="page-story container" style="padding-top: 100px;">
      <h1 class="fade-in" style="font-family: var(--font-serif); margin-bottom: var(--spacing-lg);">Story / Media</h1>
      
      <div class="media-list">
        <div class="media-item fade-in" style="display: flex; gap: 40px; margin-bottom: 60px; align-items: flex-start;">
          <div class="prominent-img" style="flex: 1; height: 300px; background-color: #f0f0f0;"></div>
          <div class="media-content" style="flex: 1;">
            <h2 style="font-size: 1.8rem; margin-bottom: 15px;">Dewa Sanzan Booklet</h2>
            <p style="margin-bottom: 20px;">
              出羽三山の歴史、思想、そして風景をまとめたデジタルブックレット。<br>
              美しい写真とともに、庄内の精神世界への入口を提供します。
            </p>
            <a href="#" style="text-decoration: underline;">Read Online &rarr;</a>
          </div>
        </div>

         <div class="media-item fade-in" style="display: flex; gap: 40px; margin-bottom: 60px; align-items: flex-start; flex-direction: row-reverse;">
          <div class="prominent-img" style="flex: 1; height: 300px; background-color: #f0f0f0;"></div>
          <div class="media-content" style="flex: 1;">
            <h2 style="font-size: 1.8rem; margin-bottom: 15px;">Mummy of Shonai</h2>
            <p style="margin-bottom: 20px;">
              即身仏として残された僧侶たちの願いと、それを守り続ける人々の物語。
            </p>
             <a href="#" style="text-decoration: underline;">Read Story &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  `;
}
