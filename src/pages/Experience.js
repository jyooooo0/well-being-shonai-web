export function Experience() {
    return `
    <div class="page-experience">
        
        <!-- INTRO -->
        <header class="exp-header" style="padding: 150px 0 80px; text-align: center; background: var(--color-bg);">
            <div class="container">
                <p class="fade-in serif" style="color: var(--color-accent); letter-spacing: 0.2em; margin-bottom: 1rem;">JOURNEY OF REBIRTH</p>
                <h1 class="fade-in serif" style="font-size: 3rem; margin-bottom: 2rem;">生まれかわりの旅</h1>
                <p class="fade-in" style="max-width: 600px; margin: 0 auto; line-height: 2;">
                    出羽三山（羽黒山・月山・湯殿山）を巡ることは、<br>
                    「死と再生」を辿る旅とされています。<br>
                    現世から来世、そして未来へ。<br>
                    身体を通して、魂を生まれ変わらせる体験です。
                </p>
            </div>
        </header>

        <!-- 1. HAGURO -->
        <section class="exp-section" style="padding: 100px 0;">
            <div class="container grid-responsive" style="align-items: center; gap: 60px;">
                <div class="img-wrap fade-in" style="position: relative; height: 500px; overflow: hidden;">
                     <img src="${ASSETS.HAGURO_MAIN}" class="img-live" style="width: 100%; height: 100%; object-fit: cover;">
                     <div style="position: absolute; bottom: 20px; left: 20px; color: #fff; z-index: 2;">
                        <span style="font-size: 3rem; font-family: var(--font-serif); opacity: 0.8;">01</span>
                     </div>
                </div>
                <div class="text-wrap fade-in">
                    <h2 class="serif" style="font-size: var(--font-size-h2); margin-bottom: 20px;">羽黒山 <span style="font-size: 1rem; color: #666;">- Present -</span></h2>
                    <p style="margin-bottom: 30px; line-height: 1.8; font-size: var(--font-size-body);">
                        <strong>現世の利益を願う山</strong><br><br>
                        樹齢数百年を超える杉並木と、2,446段の石段。<br>
                        一歩踏みしめるごとに、身体の重みと呼吸を感じる。<br>
                        自身の肉体という「現世」に向き合う時間。
                    </p>
                    <ul style="list-style: none; color: #666; font-size: 0.9rem; border-top: 1px solid #eee; padding-top: 20px;">
                        <li>・国宝 五重塔</li>
                        <li>・杉並木の参道</li>
                        <li>・精進料理「斎館」</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- 2. GASSAN -->
        <section class="exp-section" style="padding: 100px 0; background: #f4f8f9;">
            <div class="container grid-responsive" style="align-items: center; gap: 60px; direction: rtl;">
                <div class="img-wrap fade-in" style="position: relative; height: 500px; overflow: hidden;">
                     <img src="${ASSETS.GASSAN_MAIN}" class="img-live" style="width: 100%; height: 100%; object-fit: cover;">
                     <div style="position: absolute; bottom: 20px; right: 20px; color: #fff; z-index: 2;">
                        <span style="font-size: 3rem; font-family: var(--font-serif); opacity: 0.8;">02</span>
                     </div>
                </div>
                <div class="text-wrap fade-in" style="direction: ltr;">
                    <h2 class="serif" style="font-size: var(--font-size-h2); margin-bottom: 20px;">月山 <span style="font-size: 1rem; color: #666;">- Past -</span></h2>
                    <p style="margin-bottom: 30px; line-height: 1.8; font-size: var(--font-size-body);">
                        <strong>過去、死後の世界</strong><br><br>
                        雲上の別世界。<br>
                        高山植物と岩場、霧に包まれた静寂の稜線を行く。<br>
                        思考を手放し、祖霊と交わる「夜」の世界体験。
                    </p>
                     <ul style="list-style: none; color: #666; font-size: 0.9rem; border-top: 1px solid #eee; padding-top: 20px;">
                        <li>・弥陀ヶ原湿原</li>
                        <li>・月山神社本宮</li>
                        <li>・雲海</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- 3. YUDONO -->
        <section class="exp-section" style="padding: 100px 0; background: #1a1a1a; color: #fff;">
            <div class="container grid-responsive" style="align-items: center; gap: 60px;">
                <div class="img-wrap fade-in" style="position: relative; height: 500px; overflow: hidden;">
                     <img src="${ASSETS.YUDONO_MAIN}" class="img-live" style="width: 100%; height: 100%; object-fit: cover;">
                     <div style="position: absolute; bottom: 20px; left: 20px; color: #fff; z-index: 2;">
                        <span style="font-size: 3rem; font-family: var(--font-serif); opacity: 0.8;">03</span>
                     </div>
                </div>
                <div class="text-wrap fade-in">
                    <h2 class="serif" style="font-size: var(--font-size-h2); margin-bottom: 20px; color: var(--color-accent);">湯殿山 <span style="font-size: 1rem; color: #999;">- Future -</span></h2>
                    <p style="margin-bottom: 30px; line-height: 1.8; font-size: var(--font-size-body);">
                        <strong>未来、再生の場所</strong><br><br>
                        「語るなかれ、聞くなかれ」とされた秘境。<br>
                        湧き出る湯、朱色の巨岩。<br>
                        裸足でその温もりに触れ、生命の源泉として生まれ変わる。
                    </p>
                    <ul style="list-style: none; color: #aaa; font-size: 0.9rem; border-top: 1px solid #333; padding-top: 20px;">
                        <li>・湯殿山神社本宮</li>
                        <li>・御神体（巨岩）</li>
                        <li>・参籠所</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="cta" style="padding: 100px 0; text-align: center;">
            <h2 class="serif fade-in" style="font-size: 2rem; margin-bottom: 40px;">あなただけの巡礼を計画する</h2>
            <a href="#/contact" class="btn-primary fade-in" style="background: var(--color-accent); color: #fff; padding: 15px 40px; border-radius: 4px; display: inline-block;">Contact for Details</a>
        </section>

    </div>
    `;
}
