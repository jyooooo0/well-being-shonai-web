export function About() {
  return `
    <div class="page-about">
      
      <!-- HERO -->
      <div class="about-hero" style="height: 60vh; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; background: #000;">
        <img src="${ASSETS.ABOUT_BG}" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.6;">
        <h1 class="fade-in serif" style="position: relative; color: #fff; font-size: 4rem; z-index: 2;">About Us</h1>
      </div>

      <div class="container" style="padding-top: 80px; padding-bottom: 100px;">
        
        <!-- MISSION -->
        <section class="mission fade-in" style="text-align: center; margin-bottom: 120px;">
          <h2 class="serif" style="margin-bottom: 30px; font-size: 2.5rem;">Mission: 立ち返る力</h2>
          <p style="max-width: 700px; margin: 0 auto; line-height: 2;">
            現代社会の中で失われつつある「静寂」と「自己との対話」。<br>
            庄内の宿坊文化と自然信仰をベースに、<br>
            心身をリセットし、新たな活力を得る体験を提供します。
          </p>
        </section>

        <!-- PHILOSOPHY (Missing part restored) -->
        <section class="philosophy grid-responsive" style="margin-bottom: 120px; align-items: center; gap: 60px;">
             <div class="img-col fade-in">
                <img src="${ASSETS.ABOUT_SUB}" style="width: 100%; height: auto; border-radius: 4px;">
             </div>
             <div class="text-col fade-in">
                <h3 class="serif" style="font-size: 2rem; margin-bottom: 20px;">Circulation of Life</h3>
                <p style="line-height: 1.8;">
                    私たちが大切にしているのは「循環」です。<br>
                    死と再生、過去と未来、自然と人間。<br>
                    そのすべてが円環するように巡る世界で、<br>
                    あなた自身の「本来の姿」に立ち返る旅を。
                </p>
             </div>
        </section>

        <!-- UNIQUENESS -->
        <section class="uniqueness fade-in">
          <h2 class="serif" style="text-align: center; margin-bottom: 60px; font-size: 2.5rem;">3 Uniquenesses</h2>
          <div class="grid-responsive" style="gap: 40px; text-align: left;">
            <div class="card" style="padding: 40px; background: #fff; border-top: 2px solid var(--color-accent);">
              <h3 class="serif" style="margin-bottom: 15px; font-size: 1.5rem;">1. Modern Shukubo</h3>
              <p>現代の宿坊として、宗教性を超えた普遍的な精神体験を提供します。</p>
            </div>
            <div class="card" style="padding: 40px; background: #fff; border-top: 2px solid var(--color-accent);">
              <h3 class="serif" style="margin-bottom: 15px; font-size: 1.5rem;">2. Interpretation</h3>
              <p>難解な思想を現代語とアートで翻訳・可視化し、直感的に伝えます。</p>
            </div>
            <div class="card" style="padding: 40px; background: #fff; border-top: 2px solid var(--color-accent);">
              <h3 class="serif" style="margin-bottom: 15px; font-size: 1.5rem;">3. Nature & Cycle</h3>
              <p>手つかずの自然の循環の中に身を置き、人間もその一部であることを体感する没入型プログラム。</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  `;
}
