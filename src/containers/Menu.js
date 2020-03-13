import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Input, Dropdown } from 'semantic-ui-react';
import * as options from '../constants/options';

const Menu = (props) => {
  const {
    country,
    type,
    query,
    handleCountryChange,
    handleTypeChange,
    handleSetQuery,
  } = props;
  const isEverything = type === 'everything';
  return (
    <Grid columns={3}>
      <Grid.Column>
        <Dropdown
          placeholder='Select a Country'
          fluid
          selection
          options={options.COUNTRIES}
          onChange={handleCountryChange}
          value={isEverything ? '' : country}
          disabled={isEverything}
          error={!isEverything && !country}
        />
      </Grid.Column>
      <Grid.Column>
        <Dropdown
          placeholder='Top Headlines'
          fluid
          selection
          options={options.NEWS_TYPES}
          onChange={handleTypeChange}
          value={type}
        />
      </Grid.Column>
      <Grid.Column>
        <Input
          icon="search"
          placeholder="Search..."
          onChange={handleSetQuery}
          error={isEverything && query === ''}
        />
      </Grid.Column>
    </Grid>
  );
};

export default Menu;
