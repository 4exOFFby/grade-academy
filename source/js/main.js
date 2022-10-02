import {menuToggler, menuButton} from '../js/main-menu.js';
import {showNextSlide, showPreviosSlide, sliderButtonNext, sliderButtonPrevios} from '../js/slider.js'


menuButton.addEventListener('click', menuToggler);

sliderButtonNext.addEventListener('click', showNextSlide);
sliderButtonPrevios.addEventListener('click', showPreviosSlide);

