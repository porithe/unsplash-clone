import React from 'react';
import './Results.scss';
import Masonry from 'react-masonry-component';
import Loading from '../Loading/Loading';

const masonryOptions = {
  isFitWidth: true,
};

const Results = ({images, title, loading}) => {


  return (
    <div className="results">
      <h2 className="results__title">{title}</h2>
      {
        loading === true ? <Loading /> : <Masonry options={masonryOptions} className="results__container">
        {
          images.map(item => (
            <img src={item.urls.small} alt="img" key={item.id} />
          ))
        }
      </Masonry>
      }
    </div>
  )
}

export default Results;