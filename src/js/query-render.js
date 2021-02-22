import refs from './refs';
import setNotification from './notification';

const renderQuery = (arg, card, amount) => {
  setNotification(arg, amount);
  refs.loadMoreButton.classList.remove('is-hidden');
  refs.gallery.insertAdjacentHTML('beforeend', card);

  window.scrollTo({
    top: document.documentElement.offsetHeight,
    behavior: 'smooth',
  });
};

export default renderQuery;
