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

document.querySelectorAll('a[href="#agendamento"]').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Impede o comportamento padrão (não deixa o navegador adicionar o #)
  
      const target = document.querySelector('#agendamento');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' }); // Scroll suave até o elemento
      }
  
      // Remove o hash da URL
      history.replaceState(null, null, window.location.pathname);
    });
  });
