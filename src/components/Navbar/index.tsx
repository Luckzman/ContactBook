import React from 'react';
import Button from '../Button';
import './Navbar.scss';
// import { Link } from 'react-router-dom';

interface Props {
  handleToggleModal: () => void;
  handleLikedContact: () => void;
}

const Navbar: React.FC<Props> = ({ handleToggleModal, handleLikedContact }) => {
  return (
    <div className="navbar">
      <div className="container">
        <h3 className="brand">ContactBook</h3>
        <div className="links">
          <p className="favorite-link" onClick={handleLikedContact}>
            Favorite Contacts
          </p>
          <div className="pointer"></div>
          <Button data-testid="navbar-btn" onClick={handleToggleModal}>
            New Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
