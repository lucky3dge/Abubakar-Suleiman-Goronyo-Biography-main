// Get saved dark mode state
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

// Enable dark mode
const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
};

// Disable dark mode
const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', null);
};

// Check on page load
if (darkmode === 'active') enableDarkmode();

// Toggle dark mode on button click
themeSwitch.addEventListener('click', () => {
  darkmode = localStorage.getItem('darkmode');
  darkmode !== 'active' ? enableDarkmode() : disableDarkmode();
});


// Carousel
const slide = document.querySelector('.carousel-slide');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 0;
const size = items[0].clientWidth;

function updateSlide() {
  slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

nextBtn.addEventListener('click', () => {
  counter = (counter + 1) % items.length;
  updateSlide();
});

prevBtn.addEventListener('click', () => {
  counter = (counter - 1 + items.length) % items.length;
  updateSlide();
});

// Optional: auto-slide every 5 seconds
setInterval(() => {
  counter = (counter + 1) % items.length;
  updateSlide();
}, 5000);


// scroll-up
const scrollButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollButton.classList.add('show');
  } else {
    scrollButton.classList.remove('show');
  }
});

scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
