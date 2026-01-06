export function Contact() {
    return `
    <div class="page-contact container" style="padding-top: 100px; max-width: 800px;">
      <h1 class="fade-in" style="font-family: var(--font-serif); margin-bottom: var(--spacing-lg);">Contact Us</h1>
      <p class="fade-in" style="margin-bottom: 40px;">
        取材・ツアー・その他のお問い合わせはこちらからお願いいたします。<br>
        For inquiries regarding tours, media, or other matters, please contact us here.
      </p>

      <form class="contact-form fade-in" onsubmit="event.preventDefault(); alert('Sent!');" style="display: flex; flex-direction: column; gap: 20px;">
        <div class="form-group">
          <label style="display: block; margin-bottom: 5px;">Name</label>
          <input type="text" style="width: 100%; padding: 10px; border: 1px solid #ccc; background: #fafafa;">
        </div>
        
        <div class="form-group">
          <label style="display: block; margin-bottom: 5px;">Email</label>
          <input type="email" style="width: 100%; padding: 10px; border: 1px solid #ccc; background: #fafafa;">
        </div>

        <div class="form-group">
          <label style="display: block; margin-bottom: 5px;">Message</label>
          <textarea rows="5" style="width: 100%; padding: 10px; border: 1px solid #ccc; background: #fafafa;"></textarea>
        </div>

        <button type="submit" style="align-self: flex-start; padding: 12px 30px; background-color: var(--color-text); color: #fff; border: none; cursor: pointer; transition: background 0.3s;">
          Send Message
        </button>
      </form>
    </div>
  `;
}
