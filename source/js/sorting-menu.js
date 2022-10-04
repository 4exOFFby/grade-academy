const sortingMenuButton = document.querySelector('.catalog-results__sorting-button');

const openSortingMenuHandler = (evt) => {
  evt.preventDefault();
  const sortingMenu = document.querySelector('.catalog-results__sorting-list');
  sortingMenuButton.classList.toggle('catalog-results__sorting-button--open');
  sortingMenu.classList.toggle('catalog-results__sorting-list--closed');
}

export {sortingMenuButton, openSortingMenuHandler};




