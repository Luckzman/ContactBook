import React from 'react';
import Button from '../Button';
import './Navbar.scss';

interface Props {
  handleNewContact: () => void;
}

const Navbar: React.FC<Props> = ({ handleNewContact }) => {
  return (
    <div className="navbar">
      <div className="container">
        <h3 className="brand">ContactBook</h3>
        <div className="links">
          <p>Favorite Contacts</p>
          <Button onClick={handleNewContact}>New Contact</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
