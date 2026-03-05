export class TransitionController {
    constructor() {
      this.sections = [];
      this.observer = null;
    }
  
    init() {
      this.sections = Array.from(document.querySelectorAll('main > div[id]'));
      this.setupObserver();
    }
  
    setupObserver() {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const section = entry.target;
          const index = this.sections.indexOf(section);
          
          if(entry.isIntersecting) {
            this.animateSectionIn(section, index);
          } else {
            this.animateSectionOut(section, index);
          }
        });
      }, {
        threshold: 0.4,
        rootMargin: '-100px 0px -100px 0px'
      });
  
      this.sections.forEach(section => this.observer.observe(section));
    }
  
    animateSectionIn(section, index) {
      section.style.transform = `translateY(${scrollDirection === 'down' ? 40 : -40}px)`;
      section.style.opacity = '0';
      
      requestAnimationFrame(() => {
        section.classList.add('section-transition');
        section.style.transform = 'translateY(0)';
        section.style.opacity = '1';
        
        // Section-specific animations
        if(section.id === 'education') {
          this.animateTimelineItems();
        }
      });
    }
  
    animateSectionOut(section, index) {
      section.classList.add('section-transition');
      section.style.opacity = '0.4';
      section.style.transform = `translateY(${scrollDirection === 'down' ? -40 : 40}px) scale(0.98)`;
    }
  
    animateTimelineItems() {
      const timelineItems = document.querySelectorAll('.timeline-item');
      timelineItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('timeline-visible');
        }, index * 150);
      });
    }
  }
  window.addEventListener('scroll', () => {
    this.sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const scrollPercent = (rect.top / window.innerHeight) * 100;
      
      if(scrollPercent < 120 && scrollPercent > -20) {
        section.style.transform = `translateY(${scrollPercent * 0.3}px)`;
      }
    });
  });