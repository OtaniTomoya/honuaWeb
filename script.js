document.addEventListener('DOMContentLoaded', () => {
    const features = document.querySelectorAll('.feature');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 1,
    });
  
    features.forEach((feature) => observer.observe(feature));
  });
  