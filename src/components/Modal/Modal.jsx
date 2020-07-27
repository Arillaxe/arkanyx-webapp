import React from 'react';
import PropTypes from 'prop-types';

import './modal.styl';

const Modal = (props) => {
  const { children, modalClose } = props;

  const onModalClose = (e) => {
    if (e.target === e.currentTarget) modalClose();
  };

  return (
    <div className="modal-wrapper" onClick={onModalClose}>
      <div className="modal">
        <div className="modal-close" onClick={onModalClose}>X</div>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  modalClose: PropTypes.func.isRequired,
};

export default Modal;
