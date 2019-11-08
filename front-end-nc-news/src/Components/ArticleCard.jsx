import React from 'react';

const ArticleCard = props => {
  return (
    <div>
      <>
        <h3 className="article-card-title">{props.article.title}</h3>
        <hr className="title-underline" align="left" />
        <p className="article-card-blurb">
          {props.article.body.slice(0, 100) + '...'}
        </p>
        <div className="author-timestamp">
          <p>
            <span className="tags">&lt;</span>
            {props.article.author}
            <span className="tags">/&gt;</span>
          </p>
          <p className="date-string">
            {new Date(props.article.created_at).toDateString()}
          </p>
        </div>
      </>
    </div>
  );
};

export default ArticleCard;
