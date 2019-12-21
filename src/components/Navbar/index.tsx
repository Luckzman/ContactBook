import React from 'react';
import Button from '../Button';
import './Navbar.scss';

interface Props {
  handleToggleModal: () => void;
}

const Navbar: React.FC<Props> = ({ handleToggleModal }) => {
  return (
    <div className="navbar">
      <div className="container">
        <h3 className="brand">ContactBook</h3>
        <div className="links">
          <p className="favorite-link">Favorite Contacts</p>
          <Button data-testid="navbar-btn" onClick={handleToggleModal}>
            New Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
