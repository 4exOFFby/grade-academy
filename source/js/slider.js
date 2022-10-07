const sliderPagination = document.querySelector('.main-slider__pagination-list');
const paginationLinks = sliderPagination.children;
const sliderButtonNext = document.querySelector('.main-slider__button--next');
const sliderButtonPrevious = document.querySelector('.main-slider__button--previous');
const sliderList = document.querySelector('.main-slider__list');
const slides = sliderList.children;
const sliderSection = document.querySelector('.main-slider');
let i = 0;


const changeSliderBackground = (count) => {
  switch(count) {
    case 1:
      sliderSection.className = '';
      sliderSection.classList.add('main-slider');
      sliderSection.classList.add('main-slider--light-blue');
      break;
    case 2:
      sliderSection.className = '';
      sliderSection.classList.add('main-slider');
      sliderSection.classList.add('main-slider--gray');
      break;
    default:
      sliderSection.className = '';
      sliderSection.classList.add('main-slider');
      sliderSection.classList.add('main-slider--pink');
  }
};


const showNextSlide = () => {
  i++;
  changeSliderBackground(i);
  const imgCount = slides.length;
  if (i === imgCount) {
    i = 0
  }
  const currentSlide = document.querySelector('.main-slider__item--active');
  const currentPagination = document.querySelector('.main-slider__pagination-item--active');
  currentSlide.classList.toggle('main-slider__item--active');
  currentPagination.classList.toggle('main-slider__pagination-item--active');
  paginationLinks[i].classList.toggle('main-slider__pagination-item--active');
  slides[i].classList.toggle('main-slider__item--active');
}

const showPreviousSlide = () => {
  i--;
  const imgCount = slides.length;
  const currentSlide = document.querySelector('.main-slider__item--active');
  const currentPagination = document.querySelector('.main-slider__pagination-item--active');
  currentSlide.classList.toggle('main-slider__item--active');
  currentPagination.classList.toggle('main-slider__pagination-item--active');
  if (i < 0) {
    i = imgCount - 1;
  }
  changeSliderBackground(i);
  slides[i].classList.toggle('main-slider__item--active');
  paginationLinks[i].classList.toggle('main-slider__pagination-item--active');
}


paginationLinks[0].addEventListener('click', () => {
  paginationLinks[0].classList.add('main-slider__pagination-item--active');
  paginationLinks[1].classList.remove('main-slider__pagination-item--active');
  paginationLinks[2].classList.remove('main-slider__pagination-item--active');
  slides[0].classList.add('main-slider__item--active');
  slides[1].classList.remove('main-slider__item--active');
  slides[2].classList.remove('main-slider__item--active');
  sliderSection.className = '';
  sliderSection.classList.add('main-slider');
  sliderSection.classList.add('main-slider--pink');
})

paginationLinks[1].addEventListener('click', () => {
  paginationLinks[0].classList.remove('main-slider__pagination-item--active');
  paginationLinks[1].classList.add('main-slider__pagination-item--active');
  paginationLinks[2].classList.remove('main-slider__pagination-item--active');
  slides[0].classList.remove('main-slider__item--active');
  slides[1].classList.add('main-slider__item--active');
  slides[2].classList.remove('main-slider__item--active');
  sliderSection.className = '';
  sliderSection.classList.add('main-slider');
  sliderSection.classList.add('main-slider--light-blue');
})

paginationLinks[2].addEventListener('click', () => {
  paginationLinks[0].classList.remove('main-slider__pagination-item--active');
  paginationLinks[1].classList.remove('main-slider__pagination-item--active');
  paginationLinks[2].classList.add('main-slider__pagination-item--active');
  slides[0].classList.remove('main-slider__item--active');
  slides[1].classList.remove('main-slider__item--active');
  slides[2].classList.add('main-slider__item--active');
  sliderSection.className = '';
  sliderSection.classList.add('main-slider');
  sliderSection.classList.add('main-slider--gray');
})

export {showNextSlide, showPreviousSlide, sliderButtonNext, sliderButtonPrevious};
