import React, { useState } from 'react';
import './Results.scss';
import Masonry from 'react-masonry-component';
import Loading from '../Loading/Loading';
import useModal from '../../assets/useModal';
import Modal from '../Modal/Modal';

const masonryOptions = {
  isFitWidth: true,
};

const Results = ({images, title, loading}) => {

  const {isShowing, toggle} = useModal();
  const [imageData, setImageData] = useState([]);
  
  const getImageData = (data, toggle) => {
    toggle();
    setImageData(data);
  }

  return (
    <div className="results">
      <h2 className="results__title">{title}</h2>
      {
        loading === true ? <Loading /> : <Masonry options={masonryOptions} className="results__container">
        {
          images.map(item => (
            <img src={item.urls.small} alt={item.alt_description} key={item.id} onClick={() => getImageData(item, toggle)} />
          ))
        }
      </Masonry>
      }
      <Modal isShowing={isShowing} hide={toggle} imageData={imageData} />
    </div>
  )
}

export default Results;