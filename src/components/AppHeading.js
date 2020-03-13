import React from 'react';
import { Header } from 'semantic-ui-react'

const AppHeading = ({ name }) => {
  return <Header as='h1'>{name} News App</Header>;
};

export default AppHeading;
