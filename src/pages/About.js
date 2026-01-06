export function About() {
    return `
    <div class="page-about container" style="padding-top: 100px;">
      <h1 class="fade-in" style="font-family: var(--font-serif); margin-bottom: var(--spacing-lg);">About Us</h1>
      
      <section class="mission fade-in">
        <h2>Mission: 立ち返る力</h2>
        <p>
          現代社会の中で失われつつある「静寂」と「自己との対話」。<br>
          庄内の宿坊文化と自然信仰をベースに、<br>
          心身をリセットし、新たな活力を得る体験を提供します。
        </p>
      </section>

      <section class="uniqueness fade-in" style="margin-top: var(--spacing-xl);">
        <h2>3 Uniquenesses</h2>
        <div class="grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 20px;">
          <div class="card" style="padding: 20px; background: #fff; border: 1px solid #eee;">
            <h3>Modern Shukubo</h3>
            <p>現代の宿坊として、宗教性を超えた普遍的な精神体験。</p>
          </div>
          <div class="card" style="padding: 20px; background: #fff; border: 1px solid #eee;">
            <h3>Interpretation</h3>
            <p>難解な思想を現代語とアートで翻訳・可視化。</p>
          </div>
          <div class="card" style="padding: 20px; background: #fff; border: 1px solid #eee;">
            <h3>Nature & Cycle</h3>
            <p>自然の循環の中に身を置く、没入型プログラム。</p>
          </div>
        </div>
      </section>
    </div>
  `;
}
