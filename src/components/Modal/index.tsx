import React, { ReactChild } from 'react';
import { ReactComponent as CloseIcon } from '../../assets/times-solid.svg';
import './Modal.scss';

interface Props {
  children: ReactChild;
  hideModal: (event: React.MouseEvent<SVGSVGElement>) => void;
}

const Modal: React.FC<Props> = ({ children, hideModal }) => {
  return (
    <div data-testid="modal" className="overlay">
      <div className="modal">
        <CloseIcon data-testid="close-btn" className="close" onClick={hideModal} />
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
