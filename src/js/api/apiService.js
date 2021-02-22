import axios from 'axios';

const apiKey = '20348581-4182e159a5fcf959667e3ff42';
axios.defaults.baseURL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

let pageNumber = 1;

const fetchImages = async searchQuery => {
  const {
    data: { hits, total },
  } = await axios.get(
    `&q=${searchQuery}&page=${pageNumber}&per_page=12&key=${apiKey}`,
  );

  pageNumber += 1;
  return { hits, total };
};

const resetPage = () => {
  pageNumber = 1;
};

export default { fetchImages, resetPage };
