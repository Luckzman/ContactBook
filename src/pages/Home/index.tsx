import React, { useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import ContactCard from '../../components/ContactCard';
import Navbar from '../../components/Navbar';
import Modal from '../../components/Modal';
import Toast from '../../components/Toast';
import { getAllContacts } from '../../store/actions';
import ContactForm from '../../components/ContactForm';

import './Home.scss';

interface Contact {
  message: string;
  isCreated: boolean;
}

interface Store {
  contact: Contact;
  contacts: Contact[];
}

const Home: React.FC = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const contact = useSelector((state: Store) => state.contact, shallowEqual);
  const contacts = useSelector((state: Store) => state.contacts, shallowEqual);
  const dispatch = useDispatch();
  const store = useSelector((state: Store) => state);

  console.log(store, 'store');
  const handleToggleModal = (): void => {
    setToggleModal(!toggleModal);
  };

  useEffect(() => {
    dispatch(getAllContacts());
  }, []);

  return (
    <div className="home">
      <Navbar handleToggleModal={handleToggleModal} />
      <div className="container">
        <h2>All Contacts</h2>
        <div className="card-container">
          {contacts && contacts.map((contact, i) => <ContactCard key={`contact${i}`} contact={contact} />)}
        </div>
      </div>
      {toggleModal && (
        <Modal hideModal={handleToggleModal}>
          <ContactForm closeModal={handleToggleModal} />
        </Modal>
      )}
      {/* {contact.isCreated && <Toast msg={contact.message} show={contact.isCreated} />} */}
    </div>
  );
};

export default Home;
