import React from 'react';

const HandleError = props => {
  return props.err ? (
    <h2 className="errorText">{props.err}</h2>
  ) : (
    <h2 className="errorText">No page found...</h2>
  );
};

export default HandleError;
