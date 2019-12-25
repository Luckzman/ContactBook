import React, { useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import ContactCard from '../../components/ContactCard';
import Navbar from '../../components/Navbar';
import Modal from '../../components/Modal';
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
  const [editContactData, setEditContactData] = useState<any>({});
  const contacts = useSelector((state: Store) => state.contacts, shallowEqual);
  const dispatch = useDispatch();
  const favorites = useSelector((state: Store) => state.favorites, shallowEqual);

  const handleToggleModal = (data?: {}): void => {
    setEditContactData(data);
    setToggleModal(!toggleModal);
  };

  const handleAllContact = (): void => {
    setdisplayFavorite(false);
    dispatch(getAllContacts());
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
      <Navbar
        displayFavorite={displayFavorite}
        handleToggleModal={handleToggleModal}
        handleLikedContact={handleGetFavoriteContact}
        handleAllContact={handleAllContact}
      />
      <div className="container">
        {contacts.length < 1 ? (
          <h2 data-testid="no-contacts">No Contacts</h2>
        ) : (
          <h2 data-testid="all-contacts">{`${displayFavorite ? 'Favorite' : 'All'} Contacts`}</h2>
        )}
        <div className="card-container">
          {displayFavorite
            ? favorites &&
              favorites.map((contact, i) => (
                <ContactCard key={`contact${i}`} contact={contact} displayModal={handleToggleModal} favorite={true} />
              ))
            : contacts &&
              contacts.map((contact, i) => (
                <ContactCard key={`contact${i}`} contact={contact} displayModal={handleToggleModal} />
              ))}
        </div>
      </div>
      {toggleModal && (
        <Modal hideModal={handleToggleModal}>
          {editContactData && editContactData.id ? (
            <ContactForm closeModal={handleToggleModal} editContactData={editContactData} />
          ) : (
            <ContactForm closeModal={handleToggleModal} />
          )}
        </Modal>
      )}
    </div>
  );
};

export default Home;
