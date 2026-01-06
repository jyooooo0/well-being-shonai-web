
// src/pages/Home.js
// Note: ASSETS and t() are assumed to be available globally in the bundle context.

function PageHome() {
    return `
    <div class="page-home">
        
        <!-- HERO: Noise vs Silence -->
        <section class="hero" style="height: 100vh; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; background-color: var(--color-bg-dark);">
            <div class="hero-bg-anim" style="position: absolute; inset: 0; z-index: 0; opacity: 0.4;"></div>
            
            <img src="${ASSETS.HERO_BG}" class="hero-img-bg img-live" 
                 style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.5; mix-blend-mode: luminosity;">
            
            <div class="container" style="position: relative; z-index: 2; color: var(--color-text-light); text-align: center;">
                <p class="fade-in serif" style="font-size: 1.2rem; margin-bottom: 2rem; letter-spacing: 0.2em;">${t('home_subtitle') || 'We circulate the "Power to Return".'}</p>
                <h1 class="fade-in serif" style="font-size: 4rem; line-height: 1.2; letter-spacing: 0.1em; font-weight: normal;">
                    ${t('home_title') || 'Circulate the<br>Power to Return'}
                </h1>
                <div class="scrolldown fade-in" style="position: absolute; bottom: -150px; left: 50%; transform: translateX(-50%); opacity: 0.7;">
                    <span style="writing-mode: vertical-rl; letter-spacing: 0.3em; font-size: 0.9rem;">SCROLL</span>
                </div>
            </div>
        </section>

        <!-- PHILOSOPHY: Nature & Body -->
        <section class="philosophy" style="padding: var(--spacing-xxl) 0; position: relative; background-color: var(--color-bg);">
            <div class="container" style="display: flex; flex-direction: column; align-items: center;">
                <div class="vertical-text serif fade-in" style="font-size: 2rem; height: 400px; margin-bottom: var(--spacing-xl); border-right: 1px solid var(--color-accent); padding-right: 20px;">
                    身体が先に学び、<br>心があとから頷く。
                </div>
                <div class="content max-w-800 fade-in" style="text-align: center; max-width: 700px; line-height: 2.4;">
                    <p style="margin-bottom: 2rem; font-feature-settings: 'palt';">
                        自然は管理すべき対象か、それとも人は自然の一部か。<br>
                        現代社会の効率や情報の波から離れ、<br>
                        私たちは「身体の声」を取り戻す旅に出ます。
                    </p>
                    <p class="serif" style="color: var(--color-accent); font-size: 1.2rem;">
                        「受けたもう」から始まる、生まれ変わりの旅。
                    </p>
                </div>
            </div>
        </section>

        <!-- JOURNEY: The 3 Mountains -->
        <section class="journey" style="background-color: var(--color-bg-items);">
            
            <!-- 1. HAGURO (Present/Body) -->
            <article class="mountain-section grid-responsive" style="min-height: 80vh; align-items: center; overflow: hidden;">
                <div class="img-col" style="height: 100%; position: relative; overflow: hidden; min-height: 400px;">
                    <img src="${ASSETS.HAGURO_STEPS}" class="parallax-img" style="width: 100%; height: 120%; object-fit: cover; position: absolute; top: -10%;">
                </div>
                <div class="text-col" style="padding: var(--spacing-xl); background: #fff;">
                    <span class="serif" style="display: block; color: var(--color-text-muted); margin-bottom: 1rem;">01 Present</span>
                    <h2 class="serif fade-in" style="font-size: var(--font-size-h2); margin-bottom: 2rem;">羽黒山</h2>
                    <p class="fade-in" style="margin-bottom: 2rem; font-size: var(--font-size-body);">
                        意識から身体へ。<br>
                        2,446段の石段を登り、自身の身体の重みと呼吸を感じる。<br>
                        現世利益と今を生きる喜び。
                    </p>
                    <a href="#/experience" class="btn-link">View Journey</a>
                </div>
            </article>

            <!-- 2. GASSAN (Past/Unconscious) -->
             <article class="mountain-section grid-responsive" style="min-height: 80vh; align-items: center; overflow: hidden; direction: rtl;">
                <div class="img-col" style="height: 100%; position: relative; overflow: hidden; min-height: 400px;">
                    <img src="${ASSETS.GASSAN_MAIN}" class="parallax-img" style="width: 100%; height: 120%; object-fit: cover; position: absolute; top: -10%;">
                </div>
                <div class="text-col" style="padding: var(--spacing-xl); background: #f8f8f8; direction: ltr;">
                    <span class="serif" style="display: block; color: var(--color-text-muted); margin-bottom: 1rem;">02 Past</span>
                    <h2 class="serif fade-in" style="font-size: var(--font-size-h2); margin-bottom: 2rem;">月山</h2>
                    <p class="fade-in" style="margin-bottom: 2rem; font-size: var(--font-size-body);">
                        無意識の世界へ。<br>
                        霧に包まれた稜線を歩き、思考を手放す。<br>
                        死後の世界と祖霊への祈り。
                    </p>
                    <a href="#/experience" class="btn-link">View Journey</a>
                </div>
            </article>

            <!-- 3. YUDONO (Future/Rebirth) -->
             <article class="mountain-section grid-responsive" style="min-height: 80vh; align-items: center; overflow: hidden;">
                <div class="img-col" style="height: 100%; position: relative; overflow: hidden; min-height: 400px;">
                    <img src="${ASSETS.YUDONO_MAIN}" class="parallax-img" style="width: 100%; height: 120%; object-fit: cover; position: absolute; top: -10%;">
                </div>
                <div class="text-col" style="padding: var(--spacing-xl); background: #1a1a1a; color: #fff;">
                    <span class="serif" style="display: block; color: var(--color-text-muted); margin-bottom: 1rem;">03 Future</span>
                    <h2 class="serif fade-in" style="font-size: var(--font-size-h2); margin-bottom: 2rem; color: var(--color-accent);">湯殿山</h2>
                    <p class="fade-in" style="margin-bottom: 2rem; font-size: var(--font-size-body);">
                        未来へ生まれ直す。<br>
                        語る勿れ、聞く勿れ。<br>
                        裸足で御神体に触れ、生命の源泉に還る。
                    </p>
                    <a href="#/experience" class="btn-link" style="color: #fff; border-color: #fff;">View Journey</a>
                </div>
            </article>

        </section>

        <!-- LEGACY & CLOSING -->
        <section class="legacy" style="padding: var(--spacing-xxl) 0; background: url('${ASSETS.LEGACY_MAIN}') no-repeat center/cover; position: relative;">
            <div class="overlay" style="position: absolute; inset: 0; background: rgba(0,0,0,0.6);"></div>
            <div class="container" style="position: relative; z-index: 1; color: #fff; text-align: center;">
                <h2 class="serif fade-in" style="font-size: 2.5rem; margin-bottom: 2rem;">継承される祈り</h2>
                <p class="fade-in" style="max-width: 600px; margin: 0 auto 3rem;">
                    300年祈り続ける即身仏の存在と、<br>
                    今もこの地で続く「講」の営み。<br>
                    私たちはこの精神性を次代へ繋ぎます。
                </p>
                <a href="#/about" class="btn-link fade-in" style="color: #fff; border-color: #fff;">Our Story</a>
            </div>
        </section>

    </div>
    `;
}

export const Home = PageHome;
