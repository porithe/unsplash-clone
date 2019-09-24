import React from 'react';
import './Results.scss';
const Results = ({images, title}) => {

  if (images.length > 1) {
    // console.log(images);
  }

  return (
    <div className="results">
      <h2 className="results__title">{title}</h2>
    </div>
  )
}

export default Results;