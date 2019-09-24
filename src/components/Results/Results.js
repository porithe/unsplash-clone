import React from 'react';
import './Results.scss';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  isFitWidth: true,
};

const Results = ({images, title}) => {


  return (
    <div className="results">
      <h2 className="results__title">{title}</h2>
      <Masonry options={masonryOptions} className="results__container">
        {
          images.map(item => (
            <img src={item.urls.small} alt="img" key={item.id} />
          ))
        }
      </Masonry>
    </div>
  )
}

export default Results;