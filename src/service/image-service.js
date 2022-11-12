import axios from 'axios';

const API_KEY = '563492ad6f917000010000010e1d0d0ace1442608d6776b4275b86c8';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 20,
};

export async function ImageService(query, page) {
  const response = await axios.get('search', {
    params: { query: query, page: page },
  });
  console.log(response.data.photos);
  return response.data.photos;
}
