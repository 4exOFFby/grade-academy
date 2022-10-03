import {menuToggler, menuButton} from '../js/main-menu.js';
import {showNextSlide, showPreviousSlide, sliderButtonNext, sliderButtonPrevious} from '../js/slider.js'


menuButton.addEventListener('click', menuToggler);

sliderButtonNext.addEventListener('click', showNextSlide);
sliderButtonPrevious.addEventListener('click', showPreviousSlide);

