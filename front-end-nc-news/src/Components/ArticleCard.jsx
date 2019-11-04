import React from 'react';

const ArticleCard = props => {
  return (
    <div>
      <>
        <h3 className="article-card-title">{props.article.title}</h3>
        <p className="article-card-blurb">
          {props.article.body.slice(0, 100) + '...'}
        </p>
        <p>
          <span className="tags">&lt;</span>
          {props.article.author}
          <span className="tags">/&gt;</span>
        </p>
      </>
    </div>
  );
};

export default ArticleCard;
