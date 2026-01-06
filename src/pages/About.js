export function About() {
  // Inline SVGs for Uniqueness Section
  const ICON_SHUKUBO = `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4 8 4v14"/><path d="M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"/></svg>`;
  const ICON_CYCLE = `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m0 0a9 9 0 0 1 9-9m-9 9a9 9 0 0 0 9 9"/></svg>`; // Simplified "Globe/Cycle"
  const ICON_TRANSLATE = `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`; // Book/Translate
  const ICON_RETURN = `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"/></svg>`; // Return Arrow

  return `
    <div class="page-about">
      <style>
        .about-hero {
          height: 60vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
          overflow: hidden;
        }
        .about-hero h1 {
            text-shadow: 0 4px 20px rgba(0,0,0,0.5);
        }
        .about-section {
          padding: 80px 20px;
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 2;
        }
        .about-section p {
          line-height: 2.2;
          font-feature-settings: "palt";
          font-size: 1.05rem;
        }
        .section-title {
          font-size: var(--font-size-h2);
          margin-bottom: 50px;
          font-family: var(--font-serif);
          position: relative;
          display: inline-block;
        }
        /* Fancy Underline */
        .section-title::after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 40px;
            height: 1px;
            background: var(--color-accent);
        }

        .vision-text {
          font-size: clamp(1.1rem, 3vw, 1.4rem);
          font-weight: 500;
          letter-spacing: 0.1em;
        }

        /* Strategy Section */
        .strategy-compare {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin: 50px auto;
          max-width: 700px;
          font-size: 1.1rem;
          font-weight: bold;
        }
        .compare-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          padding: 25px;
        }
        .compare-row.good {
          background: #fff; 
          box-shadow: 0 20px 40px rgba(0,0,0,0.08); 
          border-radius: 60px;
          border: 1px solid rgba(217, 51, 63, 0.1); /* Subtle accent border */
        }
        .mark {
          font-size: 1.5rem;
          width: 40px;
          text-align: center;
        }
        .mark.bad { color: #999; }
        .mark.good { color: var(--color-accent); font-size: 2rem; }
        
        /* Uniqueness Grid */
        .unique-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          text-align: left;
          margin-top: 40px;
          list-style: none;
        }
        .unique-card {
          background: rgba(255,255,255,0.95);
          padding: 40px 30px;
          border-radius: 12px;
          box-shadow: 0 4px 30px rgba(0,0,0,0.03);
          transition: transform 0.3s ease;
          border: 1px solid rgba(0,0,0,0.02);
          position: relative;
          overflow: hidden;
        }
        .unique-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 4px; height: 100%;
            background: var(--color-accent);
            opacity: 0.7;
        }
        .unique-card:hover { 
            transform: translateY(-5px); 
            box-shadow: 0 10px 40px rgba(0,0,0,0.08);
        }
        .unique-icon {
            color: var(--color-accent);
            margin-bottom: 20px;
            display: block;
        }
        
        .corp-info {
          background: #fff;
          text-align: left;
          padding: 60px;
          margin-top: 40px;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        /* Parallax Backgrounds */
        .bg-parallax {
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
        }
        .bg-mask {
            background: rgba(255,255,255,0.92);
            /* backdrop-filter: blur(2px); */ /* Performance heavy on mobile sometimes, keeping it simple */
        }

        @media (max-width: 900px) {
          .about-hero { height: 45vh; } /* Taller on mobile for impact */
          .unique-grid { grid-template-columns: 1fr; gap: 20px; }
          .about-section { padding: 60px 20px; }
          .desktop-only { display: none; }
          .corp-info { padding: 30px; }
          .bg-parallax { background-attachment: scroll; } /* Disable fixed attachment on mobile for performance */
        }
      </style>
      
      <!-- HERO -->
      <div class="about-hero fade-in">
        <img src="${ASSETS.ABOUT_BG}" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.7;">
        <h1 class="serif" style="position: relative; color: #fff; font-size: var(--font-size-hero); z-index: 2; letter-spacing: 0.1em; text-align:center;">${t('nav_about')}</h1>
      </div>

      <!-- VISION -->
      <section class="about-section fade-in">
        <h2 class="section-title">${t('about_vision_title')}</h2>
        <div class="vision-text serif" style="margin-bottom: 40px;">${t('about_vision_text')}</div>
      </section>

      <!-- VISUAL BREAK (Parallax) -->
      <div class="bg-parallax" style="background-image: url('${ASSETS.ABOUT_SUB || ASSETS.HERO_BG}'); padding: 100px 0;">
         <div class="container bg-mask" style="padding: 60px; border-radius: 4px; max-width: 800px; margin: 0 auto; text-align: center;">
            <!-- MISSION -->
            <h2 class="section-title">${t('about_mission_title')}</h2>
            <p style="font-size: 1.15rem; margin-bottom: 30px;">
              ${t('about_mission_text')}
            </p>
            <small style="color: var(--color-text-muted); display: block; font-size: 0.9rem;">${t('about_mission_note')}</small>
         </div>
      </div>

      <!-- STRATEGY -->
      <section class="about-section fade-in" style="background: linear-gradient(to bottom, #fff, #f4f8f9);">
        <div class="container">
          <h2 class="section-title">${t('strategy_title')}</h2>
          
          <h3 class="serif" style="font-size: 1.4rem; margin-bottom: 15px;">${t('strategy_main')}</h3>
          <p style="color: var(--color-text-muted); margin-bottom: 40px; font-size: 0.95rem;">${t('strategy_sub')}</p>
          
          <div class="strategy-compare">
            <div class="compare-row" style="opacity: 0.6; border-bottom: 1px solid #eee;">
              <span class="mark bad">×</span>
              <span>${t('strategy_bad')}</span>
            </div>
            <div class="compare-row good">
              <span class="mark good">◎</span>
              <span>${t('strategy_good')}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- UNIQUENESS -->
      <section class="about-section fade-in" style="padding-bottom: 80px;">
        <h2 class="section-title">${t('unique_title')}</h2>
        <ul class="unique-grid">
          <li class="unique-card">
            <div class="unique-icon">${ICON_SHUKUBO}</div>
            <h3 class="serif" style="margin-bottom: 10px; font-size: 1.25rem;">${t('unique_list_1_title')}</h3>
            <p>${t('unique_list_1_text')}</p>
          </li>
          <li class="unique-card">
            <div class="unique-icon">${ICON_CYCLE}</div>
            <h3 class="serif" style="margin-bottom: 10px; font-size: 1.25rem;">${t('unique_list_2_title')}</h3>
            <p>${t('unique_list_2_text')}</p>
          </li>
          <li class="unique-card">
            <div class="unique-icon">${ICON_TRANSLATE}</div>
            <h3 class="serif" style="margin-bottom: 10px; font-size: 1.25rem;">${t('unique_list_3_title')}</h3>
            <p>${t('unique_list_3_text')}</p>
          </li>
          <li class="unique-card">
             <div class="unique-icon">${ICON_RETURN}</div>
            <h3 class="serif" style="margin-bottom: 10px; font-size: 1.25rem;">${t('unique_list_4_title')}</h3>
            <p>${t('unique_list_4_text')}</p>
          </li>
        </ul>
        <small style="display: block; margin-top: 40px; color: var(--color-text-muted);">${t('unique_note')}</small>
      </section>

      <!-- CORP INTRO (Visual Break 2) -->
      <section class="about-section fade-in" style="background-color: var(--color-bg-dark); color: #fff; width: 100%; max-width: none; padding: 100px 20px;">
        <div class="container" style="max-width: 900px;">
            <div class="corp-info" style="background: transparent; color: #fff; padding: 0; box-shadow: none;">
              <h2 class="serif" style="font-size: 1.8rem; margin-bottom: 30px; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 15px; display: inline-block;">${t('corp_title')}</h2>
              <p style="font-size: 1.1rem;">${t('corp_text')}</p>
            </div>
        </div>
      </section>

    </div>
  `;
}
