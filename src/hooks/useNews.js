import { useState, useEffect } from 'react';
import { getNews } from '../services/newsApi';

const useNews = (country, type, query) => {
  const [articles, setArticles] = useState([]);
  const [found, setFound] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isEverything = type === 'everything' && query;
    const isTopHeadline = type === 'top-headlines' && country;
    if (isEverything || isTopHeadline) {
      setLoading(true);
      (async () => {
        const result = await getNews(country, type, query);
        const { articles, totalResults } = result;
        setArticles(articles);
        setFound(totalResults);
        setLoading(false);
      })();
    }
  }, [type, country, query]);

  return [found, articles, loading];
};

export default useNews;