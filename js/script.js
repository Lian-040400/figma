const mainManu = document.querySelector('.header__manu');
const mainManuList = document.querySelector('.header__list');
const openManu = document.querySelector('.open__manu');
const closeManu = document.querySelector('.close__manu');
const carouselContentItem = document.querySelector('.partners__cards__item');
const carouselDots = document.querySelector('.dots');
const stepToMove = 6;
const carouselItemCount = 12;
let carouselLeftValue = 8;//carouselContent position left = 0.5rem = 8px
const carouselContent = document.querySelector('.partners__cards');

makeCarouselItems();

let totalWidth = carouselContent.getBoundingClientRect().width;
let elementWidth = carouselContentItem.getBoundingClientRect().width + 80.8;// 5.05rem=80.8px margin-right of carouselContentItem
let widthToMove = elementWidth * stepToMove;
let noOFSlides = ((totalWidth / widthToMove)).toFixed(0);
let currentSlide = 1;

openManu.addEventListener('click', show);
closeManu.addEventListener('click', close);
function show() {
    console.log(444);
    mainManu.classList.add("show");
    mainManuList.classList.add('show-header-tabs')
}
function close() {
    mainManu.classList.remove("show");
}
slider();

function slider() {
    const carouselLeftButton = document.querySelector('.left');
    const carouselRightButton = document.querySelector('.right');
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
    carouselDotsItem.className = "dot";
    const noOfCarouselDots = carouselItemCount / stepToMove;

    for (let i = 0; i < noOfCarouselDots; i++) {
        const dot = carouselDotsItem.cloneNode(true);
        if (i === 0) {
            dot.classList.add('active');
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
            coarouselDotArray[i].classList.add('active');
        }
        else {
            coarouselDotArray[i].classList.remove('active');
        }
    }
}

