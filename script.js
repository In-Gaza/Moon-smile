
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => {
  observer.observe(el);
});

// Sticky navigation
const nav = document.querySelector('nav');
const navOffset = nav.offsetTop;

window.addEventListener('scroll', () => {
  if (window.pageYOffset > navOffset) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

// Back to top button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Countdown Timer
function updateCountdown() {
  const eventDate = new Date("April 25, 2024 19:00:00").getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    clearInterval(countdownTimer);
    document.querySelector(".countdown-container").innerHTML =
      '<div class="event-started">لقد بدأت الظاهرة! انظر إلى السماء الآن</div>';
    document.querySelector(".countdown-note").style.display = "none";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days.toString().padStart(2, '0');
  document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}

const countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Slide-in animations
const slideElements = document.querySelectorAll('.slide-in');

const slideObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

slideElements.forEach(el => {
  slideObserver.observe(el);
});

// Form submission handlers
document.querySelector('.newsletter-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('شكراً لك على اشتراكك في نشرتنا البريدية!');
  this.reset();
});

document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
  this.reset();
});
