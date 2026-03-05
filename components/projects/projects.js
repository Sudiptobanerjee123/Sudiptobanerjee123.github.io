const ProjectData = [
  // Frontend Projects
  {
    title: "Book-Spot Web Application",
    category: "frontend",
    tech: ["Angular", "Spring Boot", "Docker", "AWS RDS/S3"],
    github:
      "https://github.com/Sudiptobanerjee123/Final-Project-Book-App-/tree/master/Bookspot%20Angular%20Comp",
  },
  {
    title: "Portfolio Website",
    category: "frontend",
    tech: ["JavaScript", "HTML/CSS", "Figma", "UX Design"],
    github: "#",
  },
  {
    title: "Github Analytics Dashboard",
    category: "frontend",
    tech: ["React.JS", "API", "HTML", "Docker"],
    github: "https://github.com/Sudiptobanerjee123/CS-587-Github-Dashboard-",
  },

  //Analytics Projects
  {
    title: "Crime Analysis & Prediction",
    category: "analytics",
    tech: ["Python", "Spark", "Hadoop", "AWS"],
    github: "https://github.com/Sudiptobanerjee123/Big-Data-Final-Project",
  },
  {
    title: "Cricket Performance Analysis",
    category: "analytics",
    tech: ["SQL", "Excel", "Tableau", "Python"],
    github:
      "https://public.tableau.com/app/profile/sudipta.banerjee3734/viz/Cricket-Analysis_17377542721060/Dashboard1",
  },
  {
    title: "Consumer Behavior Dashboard",
    category: "analytics",
    tech: ["Tableau", "PowerQuery", "Data Visualization/ETL Tools"],
    github:
      "https://public.tableau.com/app/profile/sudipta.banerjee3734/viz/ValentinesDay-Gift/Dashboard1",
  },
  // Database Project
  {
    title: "Women’s FIFA World Cup 2023 Database Management System",
    category: "database",
    tech: ["Python", "MySQL", "Data Visualization", "Tkinter"],
    github:
      "https://github.com/Sudiptobanerjee123/Women-Fifa-Women-World-Cup-2023-Database-Management-System",
  },
];

export function renderProjects() {
  return `
      <section class="projects-section" id="projects">
        <div class="projects-container">
          <div class="projects-header">
            <h2 class="section-title">
              <span class="title-decor">Technical Projects</span>
            </h2>
            <div class="category-selector">
              <div class="select-wrapper">
                <select id="projectCategory" class="styled-select">
                  <option value="frontend">Frontend Development</option>
                  <option value="analytics">Data Analytics</option>
                  <option value="database">Database</option>
                </select>
                <div class="select-arrow">
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
            </div>
          </div>
  
          <div class="projects-grid" id="projectsGrid">
            ${renderProjectCards("frontend")}
          </div>
        </div>
      </section>
    `;
}

export function renderProjectCards(category) {
  return ProjectData.filter((project) => project.category === category)
    .map(
      (project) => `
        <div class="project-card">
          <div class="card-header">
            <h3>${project.title}</h3>
            <span class="project-category">${project.category}</span>
          </div>
          <div class="tech-stack">
            ${project.tech.map((tech) => `<span>${tech}</span>`).join("")}
          </div>
          <a href="${project.github}" class="project-link">
            <i class="fas fa-external-link-alt"></i>
            Link to Project
          </a>
        </div>
      `
    )
    .join("");
}
