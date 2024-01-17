const slider = document.querySelector('.slider');
const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

let currentIndex = 0;


function prevSlide() {
       slides[currentIndex].classList.remove('center');
    slides[currentIndex].style.transform = 'rotateY(-90deg) scale(0.8)';
    slides[currentIndex].style.transformOrigin = 'right center';
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    slides[currentIndex].classList.add('center');
    slides[currentIndex].style.transform = 'rotateY(0deg) scale(1)';
    slides[currentIndex].style.transformOrigin = 'center center';

}

function nextSlide() {
    slides[currentIndex].classList.remove('center');
    slides[currentIndex].style.transform = 'rotateY(90deg) scale(0.8)';
    slides[currentIndex].style.transformOrigin = 'left center';
    currentIndex++;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    slides[currentIndex].classList.add('center');
        slides[currentIndex].style.transform = 'rotateY(0deg) scale(1)';
    slides[currentIndex].style.transformOrigin = 'center center';
}