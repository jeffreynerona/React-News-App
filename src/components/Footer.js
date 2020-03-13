import React from 'react';
import { Divider } from 'semantic-ui-react';

const Footer = () => {
  const onClick = () => window.open('https://newsapi.org/', '_blank');
  return (
    <React.Fragment>
      <p className="myFooter" onClick={onClick}>
        <Divider inverted />
        This App is powered by NewsAPI.org
      </p>
    </React.Fragment>
  );
};

export default Footer;
