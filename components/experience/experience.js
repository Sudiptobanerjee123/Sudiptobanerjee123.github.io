export function renderExperience() {
    return `
      <section class="experience-section" id="experience">
        <div class="experience-container">
          <h2 class="section-title">
            <span class="title-decor">Work Experience</span>
          </h2>
  
          <div class="experience-grid">
            <!-- IBM Card -->
            <div class="experience-card ibm">
              <div class="card-header">
                <div class="company-meta">
                  <div class="company-logo">
                    <img src="Images/ibm logo.png" alt="IBM Logo">
                  </div>
                  <div class="position-info">
                    <h3>Application Developer</h3>
                    <div class="company-details">
                      <span class="company">IBM</span>
                      <span class="location">Bangalore, India</span>
                      <span class="duration">Jul 2021 - Jun 2023</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="impact-metrics">
                  <div class="metric">
                    <i class="fas fa-tachometer-alt"></i>
                    <div>
                      <span class="value">80%</span>
                      <span class="label">Automation</span>
                    </div>
                  </div>
                  <div class="metric">
                    <i class="fas fa-shield-alt"></i>
                    <div>
                      <span class="value">100%</span>
                      <span class="label">Compliance</span>
                    </div>
                  </div>
                  <div class="metric">
                    <i class="fas fa-bolt"></i>
                    <div>
                      <span class="value">30%</span>
                      <span class="label">Faster Delivery</span>
                    </div>
                  </div>
                </div>
                <ul class="achievements">
                  <li>
                    <i class="fas fa-cogs"></i>
                    Engineered Node.JS utility automating API-Connect V5 app creation
                  </li>
                  <li>
                    <i class="fas fa-lock"></i>
                    Integrated OAuth 2.0 and OpenAPI Swagger for GDPR/PSD2 compliance
                  </li>
                  <li>
                    <i class="fas fa-code-branch"></i>
                    Implemented CI/CD pipeline reducing development lifecycle by 30%
                  </li>
                </ul>
                <div class="tech-stack">
                  <span>Node.js</span>
                  <span>Jenkins</span>
                  <span>Postman</span>
                  <span>JUnit</span>
                  <span>IBM API-Connect</span>
                </div>
              </div>
            </div>
  
            <!-- DRDO Card -->
            <div class="experience-card drdo">
              <div class="card-header">
                <div class="company-meta">
                  <div class="company-logo">
                    <img src="Images/drl logo.png" alt="DRDO Logo">
                  </div>
                  <div class="position-info">
                    <h3>Research Analyst Intern</h3>
                    <div class="company-details">
                      <span class="company">Defense Research Laboratory</span>
                      <span class="location">Assam, India</span>
                      <span class="duration">Nov 2019 - Mar 2020</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="impact-metrics">
                  <div class="metric">
                    <i class="fas fa-chart-line"></i>
                    <div>
                      <span class="value">15%</span>
                      <span class="label">Efficiency Gain</span>
                    </div>
                  </div>
                  <div class="metric">
                    <i class="fas fa-clock"></i>
                    <div>
                      <span class="value">30%</span>
                      <span class="label">Faster Analysis</span>
                    </div>
                  </div>
                  <div class="metric">
                    <i class="fas fa-check-circle"></i>
                    <div>
                      <span class="value">80%</span>
                      <span class="label">Accuracy</span>
                    </div>
                  </div>
                </div>
                <ul class="achievements">
                  <li>
                    <i class="fas fa-database"></i>
                    Implemented SQL database for adsorption model analysis
                  </li>
                  <li>
                    <i class="fas fa-cube"></i>
                    Automated data transformation with Power Query and DAX
                  </li>
                  <li>
                    <i class="fas fa-chart-bar"></i>
                    Engineered Tableau dashboards for water treatment analysis
                  </li>
                </ul>
                <div class="tech-stack">
                  <span>SQL</span>
                  <span>Tableau</span>
                  <span>Power Query</span>
                  <span>Data Analysis</span>
                  <span>Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }