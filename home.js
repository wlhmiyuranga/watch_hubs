let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-images img');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });

    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentSlide) {
            dot.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

document.querySelector('.carousel').addEventListener('click', nextSlide);

setInterval(nextSlide, 3000);
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let scrollAmount = 0;
const scrollStep = 200; // Adjust scrolling speed
const maxScroll = slider.scrollWidth - slider.clientWidth;

// Function to scroll left
prevBtn.addEventListener('click', () => {
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) {
        scrollAmount = 0;
    }
    slider.style.transform = `translateX(-${scrollAmount}px)`;
});

// Function to scroll right
nextBtn.addEventListener('click', () => {
    scrollAmount += scrollStep;
    if (scrollAmount > maxScroll) {
        scrollAmount = maxScroll;
    }
    slider.style.transform = `translateX(-${scrollAmount}px)`;
});

// Auto-scroll function
function autoScroll() {
    scrollAmount += scrollStep;
    if (scrollAmount > maxScroll) {
        scrollAmount = 0;
    }
    slider.style.transform = `translateX(-${scrollAmount}px)`;
}

// Auto-scroll every 3 seconds
setInterval(autoScroll, 3000);
