import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div>
      <h1>test</h1>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;