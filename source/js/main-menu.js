const menuButton = document.querySelector('.main-menu-button');
const mainMenu = document.querySelector('.pages-navigation');
const imageClosed = menuButton.querySelector('.main-menu-button__icon--closed');
const imageOpened = menuButton.querySelector('.main-menu-button__icon--open');



const menuToggler = () => {
  imageClosed.classList.toggle('main-menu-button__icon--hidden');
  imageOpened.classList.toggle('main-menu-button__icon--hidden');
  mainMenu.classList.toggle('pages-navigation--open');
}


export {menuToggler, menuButton};
