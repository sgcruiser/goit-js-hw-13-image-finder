import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import refs from './refs';

const openModal = event => {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const imageOpenModal = `<img class="lightbox__image" src=${event.target.dataset.source} alt="" />`;

  const instance = basicLightbox.create(imageOpenModal, {
    onShow: () => {
      window.addEventListener('keydown', eventEscape);
    },
    closable: true,
    onClose: () => {
      window.removeEventListener('keydown', eventEscape);
    },
  });

  const eventEscape = event => {
    if (event.code === 'Escape') {
      return instance.close();
    }
  };

  instance.show();
};

refs.gallery.addEventListener('click', openModal);
