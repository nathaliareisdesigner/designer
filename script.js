const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
      }
    });
  }, { threshold: 0.3 });
  
  document.querySelectorAll('.fade-in-section').forEach(el => {
    observer.observe(el);
  });

window.addEventListener('load', function() {
    if (window.location.hash === '#agendamento') {
      history.replaceState(null, null, window.location.pathname);
    }
  });
