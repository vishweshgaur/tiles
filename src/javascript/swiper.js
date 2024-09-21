const carousel = document.getElementById('carousel');
const slides = document.querySelectorAll('.carousel img');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let dots = document.querySelectorAll('.dot');

let index = 0;

function updateDots() {

    dots.forEach((dot, i) => {
        dot.classList.toggle('text-gray-800', i === index);
        dot.classList.toggle('text-gray-400', i !== index);
    });
}

function showSlide(newIndex) {
    index = (newIndex + slides.length) % slides.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
}

// Show the next slide
nextBtn.addEventListener('click', () => {
    showSlide(index + 1);
});

// Show the previous slide
prevBtn.addEventListener('click', () => {
    showSlide(index - 1);
});

// Dot navigation
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        showSlide(i);
    });
});

// Initialize dots
updateDots();