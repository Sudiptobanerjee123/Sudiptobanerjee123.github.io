export function renderContact() {
    return `
      <section class="contact-section" id="contact">
        <div class="contact-container">
          <h2 class="section-title">
            <span class="title-decor">Get in Touch</span>
          </h2>
          
          <div class="contact-content">
            <form class="contact-form" id="email-form">
              <div class="form-group">
                <label class="form-label" for="name">Name</label>
                <input 
                  type="text" 
                  class="form-input" 
                  id="name" 
                  name="name" 
                  required
                >
              </div>
              
              <div class="form-group">
                <label class="form-label" for="email">Email</label>
                <input 
                  type="email" 
                  class="form-input" 
                  id="email" 
                  name="email" 
                  required
                >
              </div>
              
              <div class="form-group">
                <label class="form-label" for="subject">Subject</label>
                <input 
                  type="text" 
                  class="form-input" 
                  id="subject" 
                  name="subject" 
                  required
                >
              </div>
              
              <div class="form-group">
                <label class="form-label" for="message">Message</label>
                <textarea 
                  class="form-input" 
                  id="message" 
                  name="message" 
                  required
                ></textarea>
              </div>
              
              <button type="submit" class="submit-btn">
                Send Message
                <i class="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    `;
  }