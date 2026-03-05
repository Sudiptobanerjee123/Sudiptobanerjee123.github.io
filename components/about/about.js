export function renderAbout() {
  return `
    <section class="about-section" id="about">
      <div class="about-container">
        <div class="about-content">
          <div class="text-column">
            <h2 class="section-title">
              <span class="title-decor">About Me</span>
            </h2>
            <div class="content-box">
              <div><p>
                I'm <span class="accent-text">Sudipta Banerjee</span>, a Graduate Computer Science 
                student at Illinois Institute of Technology specializing in 
                <strong>Software Engineering</strong> and <strong>Data Analytics</strong>.
              </p></div>
              <div><p>
                At IBM, engineered API automation tools that reduced manual workflows by <em>80%</em> 
                while ensuring GDPR compliance. Developed cloud-based crime prediction models achieving 
                <em>85% accuracy</em> using AWS/Spark infrastructure.
              </p></div>
              <div><p>
                Designed real-time analytics systems including a FIFA World Cup database with 
                <em>30% faster query performance</em>, and interactive dashboards that improved 
                decision-making efficiency by <em>25%</em>. Proficient in full-stack development with 
                Python/JavaScript, focusing on clean architecture and performance optimization.
              </p></div>
              <div><p>
                When not coding, I analyze sports statistics - applying system design principles 
                to tactical breakdowns, blending technical rigor with strategic pattern recognition.
              </p></div>
            </div>
            <a href="/Sudipta-Banerjee (Resume).pdf" class="resume-btn" target="_blank">
              <i class="fas fa-file-alt"></i> View Resume
            </a>
            <div class="social-links">
              <a href="https://github.com/Sudiptobanerjee123" class="social-link" aria-label="GitHub">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/sudiptabanerjee14/" class="social-link" aria-label="LinkedIn">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/warrior807/" class="social-link" aria-label="Instagram">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://public.tableau.com/app/profile/sudipta.banerjee3734/vizzes" class="social-link" aria-label="Tableau">
                <i class="fa fa-external-link"></i>
              </a>
            </div>
          </div>

          <div class="image-column">
            <div class="profile-image-container">
              <img src="../Images/head.png" alt="Sudipta Banerjee" class="profile-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initAbout() {
  const aboutObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          aboutObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.about-section').forEach(section => {
    aboutObserver.observe(section);
  });
}