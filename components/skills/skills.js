export const skillsData = [
  {
    category: "Data Analysis",
    skills: [
      "Advanced Excel",
      "Power Query",
      "PivotTables",
      "DAX",
      "Macros",
      "VLookup",
      "Data Wrangling/ETL",
      "SQL Database Design",
      "Data Architecture",
    ],
    icon: "📊",
  },
  {
    category: "Data Visualization",
    skills: [
      "Tableau",
      "Power BI",
      "Matplotlib",
      "Data Storytelling",
      "Interactive Reporting",
    ],
    icon: "📈",
  },
  {
    category: "Programming",
    skills: [
      "Python",
      "JavaScript",
      "Node.js",
      "Bash Scripting",
      "Java",
      "Powershell",
    ],
    icon: "💻",
  },
  {
    category: "Big Data & Cloud",
    skills: [
      "Apache Spark",
      "Hadoop",
      "AWS (S3, EMR)",
      "Cloud Architecture",
      "Data Ingestion",
    ],
    icon: "☁️",
  },
  {
    category: "Machine Learning",
    skills: [
      "Predictive Modeling",
      "Random Forest",
      "KNN",
      "Regression Analysis",
      "Statistical Modeling",
    ],
    icon: "🤖",
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "Docker", "Jenkins", "Postman", "Jira", "SDLC"],
    icon: "🛠️",
  },
];
export function renderSkills() {
  return `
      <section class="skills-section" id="skills">
        <div class="skills-container">
          <h2 class="section-title">
            <span class="title-decor">Technical Skills</span>
          </h2>
          <div class="skills-grid">
            ${skillsData
              .map(
                (category) => `
              <div class="skill-category">
                <div class="category-header">
                  <div class="category-icon">${category.icon}</div>
                  <h3 class="category-title">${category.category}</h3>
                  <span class="category-hint">Click to expand</span>
                </div>
                <div class="skills-list">
                  <div class="skills-list-inner">
                    ${category.skills
                      .map(
                        (skill) => `
                      <span class="skill-item">${skill}</span>
                    `
                      )
                      .join("")}
                  </div>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
}
