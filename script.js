const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;

function nextSlide() {
    currentIndex++;
    
    if (currentIndex >= slideCount) {
        currentIndex = 0; // 마지막이면 첫 번째로
    }
    
    // 정확히 100% 단위로 이동하여 칸에 딱 맞게 멈춤
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// 3초마다 "한 칸 이동 후 정지" 반복
let timer = setInterval(nextSlide, 1500);

// 마우스 올리면 멈추는 센스 (구경하기 편하게)
const sliderContainer = document.querySelector('.slider');
sliderContainer.addEventListener('mouseenter', () => clearInterval(timer));
sliderContainer.addEventListener('mouseleave', () => {
    timer = setInterval(nextSlide, 3000);
});
