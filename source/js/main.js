import {menuToggler, menuButton, mainNavigation} from '../js/main-menu.js';
import {showNextSlide, showPreviousSlide, sliderButtonNext, sliderButtonPrevious} from '../js/slider.js';
import {mainPinMarker, map} from '../js/map.js';
import {sortingMenuButton, openSortingMenuHandler} from '../js/sorting-menu.js';

mainNavigation.classList.remove('main-header__navigation--no-js');

menuButton.addEventListener('click', menuToggler);

sliderButtonNext.addEventListener('click', showNextSlide);
sliderButtonPrevious.addEventListener('click', showPreviousSlide);

sortingMenuButton.addEventListener('click', (evt) => openSortingMenuHandler(evt))

mainPinMarker.addTo(map);
