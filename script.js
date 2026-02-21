const revealElements = document.querySelectorAll('.reveal');
const menuButton = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.2,
  }
);

revealElements.forEach((element) => observer.observe(element));

menuButton?.addEventListener('click', () => {
  const isOpen = navLinks?.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const canvas = document.getElementById('particles-canvas');
const context = canvas?.getContext('2d');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (canvas && context && !reducedMotion) {
  let particles = [];

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const buildParticles = () => {
    const count = Math.min(100, Math.floor(window.innerWidth / 20));

    particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      size: Math.random() * 1.8 + 0.3,
    }));
  };

  const drawFrame = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fillStyle = 'rgba(247, 223, 146, 0.52)';
      context.fill();
    });

    requestAnimationFrame(drawFrame);
  };

  resize();
  buildParticles();
  drawFrame();

  window.addEventListener('resize', () => {
    resize();
    buildParticles();
  });
}
