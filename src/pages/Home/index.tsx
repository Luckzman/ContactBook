import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import ContactCard from '../../components/ContactCard';
import Navbar from '../../components/Navbar';
import Modal from '../../components/Modal';
import Toast from '../../components/Toast';
import ContactForm from '../../components/ContactForm';
import './Home.scss';

interface Contact {
  message: string;
  isCreated: boolean;
}

interface Store {
  contacts: Contact;
}

const Home: React.FC = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const contact = useSelector((state: Store) => state.contacts, shallowEqual);

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
      {toggleModal && (
        <Modal hideModal={handleToggleModal}>
          <ContactForm closeModal={handleToggleModal} />
        </Modal>
      )}
      {contact.isCreated && <Toast msg={contact.message} show={contact.isCreated} />}
    </div>
  );
};

export default Home;
