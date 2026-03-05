// Project Data Array
const ProjectData = [
    {
      title: "Book-Spot Application",
      subject: "Online Bookstore Management",
      description:
        "Immerse in seamless book discovery with Full Stack Web Application. Angular 8 powers the frontend, HTML/CSS ensures an intuitive interface, Spring Boot drives the robust backend, and MySQL manages the database. Docker containerization guarantees easy scalability, the application offers efficient searching, viewing, and book management",
      github:
        "https://github.com/Sudiptobanerjee123/Final-Project-Book-App-/tree/master/Bookspot%20Angular%20Comp",
    },
    {
      title: "Github Analytics Dashboard",
      subject: "Frontend Web Application",
      description:
        "Dive into a cutting-edge React.js frontend, crafted with HTML/CSS. Focus on a robust dashboard with activity tracking, user metrics, repository stats, and real-time analytics. Prioritize functionality, Github Public API seamlessly integrates data, offering a rich and interactive dashboard. Explore repositories and contributions with our advanced frontend.",
      github: "https://github.com/Sudiptobanerjee123/CS-587-Github-Dashboard-",
    },
    {
      title: "Women Fifa WC 2023 DBMS",
      subject: "Database Management",
      description:
        "Journey into the Women's FIFA World Cup 2023 with our comprehensive database management system. Fusion of technology and sports, it manages tournament aspects with Tkinter's graphical user interface and a MySQL database. Immerse in an efficient UI exploring player profiles, team info, match details, goals, fixtures, and standings.",
      github:
        "https://github.com/Sudiptobanerjee123/Women-Fifa-Women-World-Cup-2023-Database-Management-System",
    },
  ];
  
  // Container for displaying projects
  const projectContainer = document.querySelector(".project-container");
  
  // Function to create project cards
  const createProjectCards = (project) => {
    // Project card
    const card = document.createElement("div");
    card.classList.add("project-card", "card");
  
    // Project body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    // Project title
    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.title;
    projectTitle.style.fontSize = "16px"; // Increase font size for title
    projectTitle.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
    projectTitle.style.color = "#fff"; // Set text color to white
    projectTitle.style.backgroundColor = "#324145"; // Set background color to a different color
    projectTitle.style.padding = "10px"; // Add padding for spacing
    projectTitle.style.borderRadius = "4px"; // Add border-radius for rounded corners
    projectTitle.style.fontWeight = "bold"; // Set font weight to bold
    projectTitle.style.textAlign = "center";
    cardBody.append(projectTitle);
  
    // Project description
    const projectDesc = document.createElement("p");
    projectDesc.textContent = project.description.replace(/\s+/g, " ").trim(); // Remove unnecessary spaces
    projectDesc.classList.add("project-desc", "card-text", "mb-4");
    cardBody.append(projectDesc);
  
    // GitHub button
    const githubButton = document.createElement("button");
    githubButton.textContent = "GitHub Link";
    githubButton.classList.add("github-button", "card-link");
    githubButton.addEventListener("click", () => {
      window.open(project.github, "_blank");
    });
    cardBody.append(githubButton);
  
    card.append(cardBody);
    projectContainer.append(card);
  };
  
  // Function to display projects
  const displayProjects = (ProjectData) => {
    ProjectData.forEach((project) => {
      createProjectCards(project);
    });
  };
  
  // Call the displayProjects function with the ProjectData array
  displayProjects(ProjectData);
  
  // Footer Component
  const footer = document.querySelector(".footer");
  footer.style.margin = "0";
  footer.style.padding = "0";
  footer.style.boxSizing = "border-box";
  
  // Create a container for the footer content
  let footerContainer = document.createElement("div");
  footerContainer.style.backgroundColor = "#333333"; // Choose a light background color
  footerContainer.style.color = "#fff"; // Choose a dark text color
  footerContainer.style.padding = "18px";
  footerContainer.style.textAlign = "center";
  footerContainer.style.borderRadius = "0px";
  
  // Create the footer text
  let footerText = document.createElement("footer-fontsize");
  footerText.textContent = `© ${new Date().getFullYear()} Developed by Sudipta Banerjee`;
  
  footerText.classList.add("footer-fontsize");
  
  // Append the footer text to the container
  footerContainer.appendChild(footerText);
  
  // Append the container to the footer element
  footer.appendChild(footerContainer);
  
  // Scroll-to-top button
  const btnScrollTop = document.querySelector("#btnScrollTop");
  
  // Add a scroll event listener to toggle the button visibility
  window.addEventListener("scroll", function() {
      // Check if the page is scrolled down
      if (window.scrollY > 100) { // Adjust the scroll position threshold as needed
          btnScrollTop.classList.add("show");
      } else {
          btnScrollTop.classList.remove("show");
      }
  });
  
  // Add a click event listener to scroll to the top when the button is clicked
  btnScrollTop.addEventListener("click", function() {
      window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
      });
  });
  
  // Initialize scroll and fade-in animation on page load
  document.addEventListener("DOMContentLoaded", function () {
      const sectionIds = ['about', 'education', 'experience', 'projects'];
      const btnScrollTop = document.querySelector("#btnScrollTop");
  
      const isInViewport = (element) => {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
      };
  
      const handleScroll = () => {
          btnScrollTop.classList.toggle("show", window.scrollY > 100);
  
          sectionIds.forEach((sectionId, index) => {
              const section = document.querySelector(`#${sectionId}`);
              if (section && isInViewport(section) && !section.classList.contains("fade-in")) {
                  setTimeout(() => section.classList.add("fade-in"), index * 300);
              }
          });
      };
  
      const scrollToSection = (targetId) => {
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth' });
              if (!targetSection.classList.contains("fade-in")) {
                  setTimeout(() => targetSection.classList.add("fade-in"), 300);
              }
          }
      };
  
      // Add scroll event listener to handle fade-in animations
      window.addEventListener("scroll", handleScroll);
  
      // Add click event listeners to navbar links for smooth scrolling
      document.querySelectorAll('.navbar-nav a.nav-link').forEach(navLink => {
          navLink.addEventListener('click', (event) => {
              event.preventDefault();
              scrollToSection(navLink.getAttribute('href').substring(1));
          });
      });
  
      handleScroll();
  });
  