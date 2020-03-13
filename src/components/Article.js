import React from 'react';
import { Grid, Image, Divider } from 'semantic-ui-react';

const Article = ({ title, description, urlToImage, url }) => {
  const onClickArticle = () => window.open(url, '_blank');
  return (
    <div onClick={onClickArticle} className="myArticle">
      <Grid>
        {urlToImage && <Grid.Column width={5}>
          <Image src={urlToImage} />
        </Grid.Column>}
        <Grid.Column width={urlToImage ? 11 : 16}>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </Grid.Column>
      </Grid>
      <Divider inverted />
    </div>
  );
};

export default Article;
