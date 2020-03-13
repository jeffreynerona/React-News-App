import React from 'react';
import { Loader } from 'semantic-ui-react';
import Article from './Article';

const Articles = ({ loading, articles }) => {
  if (loading) return <Loader active={loading}/>;
  return articles
    .filter(article => !!article.title && !!article.description)
    .map((article, i) => <Article {...article} key={`news-${i}`} />)
};

export default Articles;
