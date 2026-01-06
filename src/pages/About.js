export function About() {
  return `
    <div class="page-about">
      
      <!-- HERO -->
      <div class="about-hero" style="height: 60vh; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; background: #000;">
        <img src="${ASSETS.ABOUT_BG}" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.6;">
        <h1 class="fade-in serif" style="position: relative; color: #fff; font-size: 4rem; z-index: 2;">${t('nav_about')}</h1>
      </div>

      <div class="container" style="padding-top: 80px; padding-bottom: 100px;">
        
        <!-- MISSION -->
        <section class="mission fade-in" style="text-align: center; margin-bottom: 120px;">
          <h2 class="serif" style="margin-bottom: 30px; font-size: 2.5rem;">${t('mission_title')}</h2>
          <p style="max-width: 700px; margin: 0 auto; line-height: 2;">
            ${t('mission_text')}
          </p>
        </section>

        <!-- UNIQUENESS -->
        <section class="uniqueness fade-in">
          <h2 class="serif" style="text-align: center; margin-bottom: 60px; font-size: 2.5rem;">${t('unique_title')}</h2>
          <div class="grid-responsive" style="gap: 40px; text-align: left;">
            <div class="card" style="padding: 40px; background: #fff; border-top: 2px solid var(--color-accent);">
              <h3 class="serif" style="margin-bottom: 15px; font-size: 1.5rem;">${t('unique_1_title')}</h3>
              <p>${t('unique_1_text')}</p>
            </div>
            <div class="card" style="padding: 40px; background: #fff; border-top: 2px solid var(--color-accent);">
              <h3 class="serif" style="margin-bottom: 15px; font-size: 1.5rem;">${t('unique_2_title')}</h3>
              <p>${t('unique_2_text')}</p>
            </div>
            <div class="card" style="padding: 40px; background: #fff; border-top: 2px solid var(--color-accent);">
              <h3 class="serif" style="margin-bottom: 15px; font-size: 1.5rem;">${t('unique_3_title')}</h3>
              <p>${t('unique_3_text')}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  `;
}
