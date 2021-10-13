const carouselContentItem = document.querySelector('.news__carousel__cards__item');
const carouselDots = document.querySelector('.news__carousel__dots');
const stepToMove = 3;
const carouselItemCount = 9;
let carouselLeftValue = 8;//carouselContent position left = 0.5rem = 8px
const carouselContent = document.querySelector('.news__carousel__cards');
let totalWidth = carouselContent.getBoundingClientRect().width;
let elementWidth = carouselContentItem.getBoundingClientRect().width + 25;//  margin-right of carouselContentItem
let widthToMove = elementWidth * stepToMove;
let noOFSlides = ((totalWidth / widthToMove)).toFixed(0);
let currentSlide = 1;

slider();

function slider() {
    const carouselLeftButton = document.querySelector('.news__carousel__left');
    const carouselRightButton = document.querySelector('.news__carousel__right');
    carouselLeftButton.addEventListener('click', moveCarouselLeft);
    carouselRightButton.addEventListener('click', moveCarouselRight);
    makeCarouselDot();
}
function makeCarouselItems() {
    for (let i = 0; i < carouselItemCount - 1; i++) {
        const itemClone = carouselContentItem.cloneNode(true);
        carouselContent.appendChild(itemClone);
    }
}
function makeCarouselDot() {
    const carouselDotsItem = document.createElement('div');
    carouselDotsItem.className = "news__carousel__dot";
    const noOfCarouselDots = carouselItemCount / stepToMove;

    for (let i = 0; i < noOfCarouselDots; i++) {
        const dot = carouselDotsItem.cloneNode(true);
        if (i === 0) {
            dot.classList.add('news__carousel__dot__active');
        }

        carouselDots.appendChild(dot);
    }
}
function moveCarouselLeft() {
    if (currentSlide === 1) {
        return;
    }
    if (currentSlide === noOFSlides) {
        carouselLeftValue = 8;
    } else {
        carouselLeftValue += widthToMove;
    }
    currentSlide--;

    addOrRemoveActiveClass(currentSlide)
    carouselContent.style.left = `${carouselLeftValue}px`;
}
function moveCarouselRight() {
    if (currentSlide >= (noOFSlides)) {
        return;
    }
    carouselLeftValue -= widthToMove;
    currentSlide++;
    addOrRemoveActiveClass(currentSlide);
    carouselContent.style.left = `${carouselLeftValue}px`
}
function addOrRemoveActiveClass(currentSlide) {
    let coarouselDotArray = carouselDots.children;
 
    for (let i = 0; i < coarouselDotArray.length; i++) {
        if (i + 1 === currentSlide) {
            coarouselDotArray[i].classList.add('news__carousel__dot__active');
        }
        else {
            coarouselDotArray[i].classList.remove('news__carousel__dot__active');
        }
    }
}
