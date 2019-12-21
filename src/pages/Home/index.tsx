import React, { useState } from 'react';
import ContactCard from '../../components/ContactCard';
import Navbar from '../../components/Navbar';
import Modal from '../../components/Modal';
import './Home.scss';

const Home: React.FC = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const handleToggleModal = (): void => {
    setToggleModal(!toggleModal);
  };

  return (
    <div className="home">
      <Navbar handleToggleModal={handleToggleModal} />
      <div className="container">
        <h2>All Contacts</h2>
        <ContactCard />
      </div>
      {toggleModal && <Modal hideModal={handleToggleModal}>Hi</Modal>}
    </div>
  );
};

export default Home;
