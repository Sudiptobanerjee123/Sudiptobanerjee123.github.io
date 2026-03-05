export function renderEducation() {
    return `
      <section class="education-section" id="education">
        <div class="education-container">
          <h2 class="section-title">
            <span class="title-decor">Education</span>
          </h2>
          
          <div class="education-content">
            <!-- Master's Degree -->
            <div class="education-card">
              <div class="degree-header">
                <div class="degree-icon">
                  <i class="fas fa-university"></i>
                </div>
                <h3 class="degree-title">Master of Computer Science (M.A.S)</h3>
                <p class="degree-institution">Illinois Institute of Technology</p>
              </div>
              <div class="degree-details">
                <div class="detail-item">
                  <i class="fas fa-calendar-alt"></i>
                  <span>Aug 2023 - May 2025</span>
                </div>
                <div class="detail-item">
                  <i class="fas fa-graduation-cap"></i>
                  <span>CGPA: 3.50/4.00</span>
                </div>
                <div class="detail-item">
                  <i class="fas fa-book"></i>
                  <span>Specialization: Software Engineering</span>
                </div>
              </div>
            </div>
  
            <!-- Bachelor's Degree -->
            <div class="education-card">
              <div class="degree-header">
                <div class="degree-icon">
                  <i class="fas fa-university"></i>
                </div>
                <h3 class="degree-title">Bachelor of Technology (B.Tech)</h3>
                <p class="degree-institution">SRM Institute of Science and Technology</p>
              </div>
              <div class="degree-details">
                <div class="detail-item">
                  <i class="fas fa-calendar-alt"></i>
                  <span>July 2016 - Jun 2020</span>
                </div>
                <div class="detail-item">
                  <i class="fas fa-graduation-cap"></i>
                  <span>CGPA: 3.62/4.00</span>
                </div>
                <div class="detail-item">
                  <i class="fas fa-book"></i>
                  <span>Major: Electronics & Communication Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }