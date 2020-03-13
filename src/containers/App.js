import React, { useState } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import AppHeading from '../components/AppHeading';
import Articles from '../components/Articles';
import Footer from '../components/Footer';
import Menu from './Menu';
import useNews from '../hooks/useNews';
import debounce from '../lib/debounce';

const App = () => {
  const [country, setCountry] = useState(null);
  const [type, setType] = useState('top-headlines');
  const [query, setQuery] = useState('');
  const debounceSetQuery = debounce(setQuery, 1000);

  const handleCountryChange = (e, { value }) => setCountry(value);
  const handleTypeChange = (e, { value }) => setType(value);
  const handleSetQuery = (e) => debounceSetQuery(e.target.value);

  const [found, articles, loading] = useNews(country, type, query);

  return (
    <Container className="myContainer">
      <AppHeading name="Jeff" />
      <Menu
        handleTypeChange={handleTypeChange}
        handleCountryChange={handleCountryChange}
        handleSetQuery={handleSetQuery}
        country={country}
        type={type}
        query={query}
      />
      <Divider horizontal>
        Search Results: {loading ? 'Loading...' : `Found ${found} Articles`}
      </Divider>
      <Articles
        loading={loading}
        articles={articles}
      />
      <Footer />
    </Container>
  );
};

export default App;
