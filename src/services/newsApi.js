import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'http://newsapi.org/v2',
  headers: {
    Authorization: '0c9a83cfc8474b3290b824e9c5bc33a4',
  }
});

export const getNews = async (country, type, query) => {
  let params = {};
  if (query) params.q = query;
  if (country && type !== 'everything') params.country = country;
  const { data } = await newsApi.get(`/${type}`, {
    params,
  });
  return data;
};
