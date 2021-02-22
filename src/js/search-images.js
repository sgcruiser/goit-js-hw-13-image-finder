import debounce from 'lodash.debounce';
import refs from './refs';
import apiService from './api/apiService';
import renderQuery from './query-render';
import setNotification from './notification';
import photoCard from '../templates/photo-card.hbs';

let imagesSearch = '';

const verifyQueryResult = ({ hits, total }) => {
  let argument = 'success';
  // console.dir(data);

  if (hits.length === 0) {
    argument = 'error';
    return setNotification(argument);
  }
  const markup = photoCard(hits);

  renderQuery(argument, markup, total);
  refs.inputQuery.elements.query.value = '';
  return;
};

const makesImagesSearch = async event => {
  event.preventDefault();
  refs.gallery.innerHTML = '';
  imagesSearch = event.currentTarget.elements.query.value;

  apiService.resetPage();
  refs.loadMoreButton.classList.add('is-hidden');

  if (imagesSearch !== '') {
    const data = await apiService.fetchImages(imagesSearch);
    return verifyQueryResult(data);
  }
};

refs.inputQuery.addEventListener('submit', makesImagesSearch);

refs.loadMoreButton.addEventListener('click', () => {
  apiService.fetchImages(imagesSearch).then(verifyQueryResult);
});
