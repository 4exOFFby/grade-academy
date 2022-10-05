const mainNavigation = document.querySelector('.main-navigation')
const menuButton = mainNavigation.querySelector('.main-menu-button');
const mainMenu = mainNavigation.querySelector('.pages-navigation');
const imageClosed = mainNavigation.querySelector('.main-menu-button__icon--closed');
const imageOpened = mainNavigation.querySelector('.main-menu-button__icon--open');

mainNavigation.classList.remove('main-header__navigation--no-js');

const menuToggler = () => {
  imageClosed.classList.toggle('main-menu-button__icon--hidden');
  imageOpened.classList.toggle('main-menu-button__icon--hidden');
  mainMenu.classList.toggle('pages-navigation--open');
}


export {menuToggler, menuButton};
