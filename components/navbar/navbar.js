export function renderNavbar() {
    return `
    <nav class="navbar navbar-expand-md navbar-dark" id="main-nav">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="#">
          <div class="goose-logo-container me-3">
            <svg class="goose-icon" width="40" height="40" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19.5 17c0 1.38-1.12 2.5-2.5 2.5S14.5 18.38 14.5 17c0-.5.13-.97.35-1.38c-.22-.01-.43-.03-.65-.03c-3.18 0-5.96 1.11-8.23 2.33c-.5.28-.67.91-.39 1.39c.28.48.91.65 1.39.39C8.31 18.62 10.78 17.5 14 17.5c.42 0 .83.02 1.23.06c-.09.31-.15.63-.15.97c0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.12-.38-2.16-1-3c.62-.84 1-1.88 1-3c0-2.76-2.24-5-5-5c-.34 0-.66.04-.97.11c.04-.4.11-.78.21-1.16c-1.46-.38-3.1-.6-4.84-.6c-5 0-9 4-9 9H2c0-5.39 4.39-9.5 9.5-9.5S21 8.61 21 14v3Z"
              />
            </svg>
          </div>
          <span class="logo-text">Sudipta Banerjee</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="credentialsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Credentials
              </a>
              <ul class="dropdown-menu" aria-labelledby="credentialsDropdown">
                <li><a class="dropdown-item" href="#education">Education</a></li>
                <li><a class="dropdown-item" href="#skills">Skills</a></li>
                <li><a class="dropdown-item" href="#experience">Experience</a></li>
                <li><a class="dropdown-item" href="#leadership">Leadership</a></li>
              </ul>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="portfolioDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Portfolio
              </a>
              <ul class="dropdown-menu" aria-labelledby="portfolioDropdown">
                <li><a class="dropdown-item" href="#projects">Projects</a></li>
                <li><a class="dropdown-item" href="#research">Research</a></li>
              </ul>
            </li>
            </li>
          </ul>
          <div class="nav-right">
            <a class="nav-link cta-button" href="#contact">Contact</a>
            <!-- Theme toggle button with regular icons -->
            <button id="theme-toggle" class="theme-toggle" aria-label="Toggle dark/light mode">
              <i class="far fa-moon"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
    `;
}