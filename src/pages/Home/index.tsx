import React, { useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import ContactCard from '../../components/ContactCard';
import Navbar from '../../components/Navbar';
import Modal from '../../components/Modal';
import Toast from '../../components/Toast';
import { getAllContacts, getFavouriteContacts } from '../../store/actions';
import ContactForm from '../../components/ContactForm';

import './Home.scss';

interface Contact {
  message: string;
  isCreated: boolean;
}

interface Store {
  contact: Contact;
  contacts: Contact[];
  favorites: Contact[];
}

const Home: React.FC = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [displayFavorite, setdisplayFavorite] = useState(false);
  const contact = useSelector((state: Store) => state.contact, shallowEqual);
  const contacts = useSelector((state: Store) => state.contacts, shallowEqual);
  const dispatch = useDispatch();
  const favorites = useSelector((state: Store) => state.favorites, shallowEqual);

  console.log(favorites, 'favorites');
  const handleToggleModal = (): void => {
    setToggleModal(!toggleModal);
  };

  const handleGetFavoriteContact = (): void => {
    dispatch(getFavouriteContacts());
    setdisplayFavorite(true);
  };

  useEffect(() => {
    dispatch(getAllContacts());
  }, []);

  return (
    <div className="home">
      <Navbar handleToggleModal={handleToggleModal} handleLikedContact={handleGetFavoriteContact} />
      <div className="container">
        <h2>{`${displayFavorite ? 'Favorite' : 'All'} Contacts`}</h2>
        <div className="card-container">
          {displayFavorite
            ? favorites && favorites.map((contact, i) => <ContactCard key={`contact${i}`} contact={contact} />)
            : contacts && contacts.map((contact, i) => <ContactCard key={`contact${i}`} contact={contact} />)}
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
