const LeadershipData = [
    {
      role: "Event Coordinator",
      organization: "Indian Student Association (ISA)",
      duration: "Sep 2024 - Present · 6 mos",
      description: "Organized cultural events and student activities fostering community engagement.",
      logo: "Images/isa-logo.jpeg" 
    },
    {
      role: "Senator",
      organization: "Student Government Association (SGA)",
      duration: "Sep 2023 - Present · 1 yr 6 mos",
      description: "Represented student interests in academic policy decisions and campus initiatives.",
      logo: "Images/sga-logo.jpeg"
    }
  ];
  
  export function renderLeadership() {
    return `
      <section class="leadership-section" id="leadership">
        <div class="leadership-container">
          <h2 class="section-title">
            <span class="title-decor">Leadership Experience</span>
          </h2>
          <div class="leadership-grid">
            ${LeadershipData.map(item => `
              <div class="leadership-card">
                <h3 class="leadership-role">${item.role}</h3>
                <div class="leadership-organization">
                  <div class="organization-logo">
                    <img src="${item.logo}" alt="${item.organization} logo">
                  </div>
                  <div>
                    <div class="organization-name">${item.organization}</div>
                    <div class="organization-institution">Illinois Tech</div>
                  </div>
                </div>
                <div class="leadership-duration">${item.duration}</div>
                <p class="leadership-description">${item.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }