import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const Modal = ({ isShowing, hide, imageData }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal">
      <button className="modal__exitbutton" onClick={hide}></button>
      <img className={imageData.height > imageData.width ? "modal__img--height" : "modal__img--width"} src={imageData.urls.regular} alt={imageData.alt_description} />
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;