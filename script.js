// ===== 자동 슬라이드 JS =====
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;
let index = 0;

function showSlide() {
    index++;
    if(index >= totalSlides) index = 0;
    slides.style.transform = `translateX(-${index * 100}%)`;
}

// 3초마다 슬라이드 자동 전환
setInterval(showSlide, 3000);
