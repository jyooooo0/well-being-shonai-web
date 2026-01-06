export function renderFooter() {
    const footer = document.getElementById('main-footer');
    footer.innerHTML = `
    <div class="footer-inner container" style="padding: 40px 0; border-top: 1px solid #eee; margin-top: 60px;">
      <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
        <div class="footer-info">
          <h4 style="font-family: var(--font-serif);">General Incorporated Association Well-Being Shonai</h4>
          <p style="font-size: 0.9rem; color: #666; margin-top: 10px;">
            Yamagata, Japan
          </p>
        </div>
        <div class="footer-links">
           <ul style="list-style: none; line-height: 2;">
             <li><a href="/contact" data-link>Contact Us</a></li>
             <li><a href="#" style="color: #666;">Privacy Policy</a></li>
           </ul>
        </div>
      </div>
      <div class="copyright" style="text-align: center; margin-top: 40px; font-size: 0.8rem; color: #999;">
        &copy; ${new Date().getFullYear()} Well-Being Shonai. All Rights Reserved.
      </div>
    </div>
  `;
}
