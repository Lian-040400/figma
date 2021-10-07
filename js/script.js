const carousel = document.querySelector('.carousel');
const carouselLeftButton = document.querySelector('.left');
const carouselRightButton = document.querySelector('.right');
const carouselContentItem = document.querySelector('.partners__cards__item');
const carouselDots = document.querySelector('.dots');
const carouselDotsItem =document.createElement('div');
carouselDotsItem.className = "dot";
const stepToMove = 6;
const carouselItemCount = 12;
const noOfcarouselDots = carouselItemCount/stepToMove;
let carouselLeftValue = 8;//carouselContent position left = 0.5rem = 8px
let k=carouselDots.childNodes;

console.log(k);
const carouselContent = document.querySelector('.partners__cards');
for (let i = 0; i < carouselItemCount-1; i++) {
    const itemClone = carouselContentItem.cloneNode(true);
    carouselContent.appendChild(itemClone); 
}

let totalWidth = carouselContent.getBoundingClientRect().width;
console.log('totalWidth0',totalWidth);
let elementWidth = 180 + 16;
let widthToMove = elementWidth * stepToMove;
let noOFSlides = ((totalWidth / widthToMove)).toFixed(0);
console.log('noOFSlides1',noOFSlides);
let currentSlide = 1;
console.log('noOFSlides',noOFSlides);


for (let i = 0; i < noOfcarouselDots; i++) {
    const dot = carouselDotsItem.cloneNode(true);
    carouselDots.appendChild(dot); 
}

function muveCarouselLeft() {
    if (currentSlide === 1) {
        return;
    }
    if (currentSlide ===noOFSlides ) {
        carouselLeftValue = 8;
    } else {
        carouselLeftValue += widthToMove;
    }
    currentSlide--;
    for (let i = 1; i < k.length; i++) {
        if(i===currentSlide){
            k[i].classList.add('active');
        }
        else{
            k[i].classList.remove('active');
        }
        
    }
    carouselContent.style.left = `${carouselLeftValue}px`;
}

function muveCarouselRight() {
    console.log(noOFSlides);
    if (currentSlide >=(noOFSlides)) {
        return;
    }
    carouselLeftValue -= widthToMove;
    currentSlide++;
    for (let i = 1; i < k.length; i++) {
        if(i===currentSlide){
            k[i].classList.add('active');
        }
        else{
            k[i].classList.remove('active');
        }
        
    }
    carouselContent.style.left = `${carouselLeftValue}px`
}
carouselLeftButton.addEventListener('click', muveCarouselLeft);
carouselRightButton.addEventListener('click', muveCarouselRight);