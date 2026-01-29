const slidesContainer = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;

function moveSlide() {
    currentIndex++;
    
    // 마지막 슬라이드에 도달하면 첫 번째로 복귀
    if (currentIndex >= slideCount) {
        currentIndex = 0;
    }
    
    const translateValue = -(currentIndex * (100 / slideCount));
    slidesContainer.style.transform = `translateX(${translateValue}%)`;
}

// 3초마다 자동 재생
let slideInterval = setInterval(moveSlide, 3000);

// 마우스를 올리면 정지, 떼면 다시 재생 (사용자 편의)
const slider = document.querySelector('.slider');
slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
slider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(moveSlide, 3000);
});
