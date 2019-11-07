import React from 'react';

const HandleError = props => {
  return props.err ? (
    <div className="errorText">
      <h2>{props.err}</h2>
    </div>
  ) : (
    <div className="errorText">
      <h2>No page found...</h2>
    </div>
  );
};

export default HandleError;
