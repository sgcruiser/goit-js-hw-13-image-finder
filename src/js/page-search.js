import searchForm from '../templates/search-form.hbs';
import gallery from '../templates/gallery.hbs';
import pageNext from '../templates/page-next.hbs';

document.body.insertAdjacentHTML('beforeend', searchForm());

document.body.insertAdjacentHTML('beforeend', gallery());

document.body.insertAdjacentHTML('beforeend', pageNext());
