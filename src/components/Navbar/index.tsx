import React from 'react';
import Button from '../Button';
import './Navbar.scss';

interface Props {
  handleToggleModal: () => void;
  handleLikedContact: () => void;
  displayFavorite: boolean;
  handleAllContact: () => void;
}

const Navbar: React.FC<Props> = ({ displayFavorite, handleToggleModal, handleAllContact, handleLikedContact }) => {
  return (
    <div className="navbar">
      <div className="container">
        <h3 data-testid="brand" className="brand" onClick={handleAllContact}>
          ContactBook
        </h3>
        <div className="links">
          {displayFavorite ? (
            <p data-testid="all-contact-text" className="favorite-link extra" onClick={handleAllContact}>
              All Contacts
            </p>
          ) : (
            <p data-testid="fav-contact-link" className="favorite-link" onClick={handleLikedContact}>
              Favorite Contacts
            </p>
          )}
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
