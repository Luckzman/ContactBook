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
  const [editContactData, setEditContactData] = useState<any>({});
  const contact = useSelector((state: Store) => state.contact, shallowEqual);
  const contacts = useSelector((state: Store) => state.contacts, shallowEqual);
  const dispatch = useDispatch();
  const favorites = useSelector((state: Store) => state.favorites, shallowEqual);

  const handleToggleModal = (data?: {}): void => {
    setEditContactData(data);
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
      {/* <div className="main"> */}
        <div className="container">
          <h2>{`${displayFavorite ? 'Favorite' : 'All'} Contacts`}</h2>
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
      {/* </div> */}
      {toggleModal && (
        <Modal hideModal={handleToggleModal}>
          {editContactData && editContactData.id ? (
            <ContactForm closeModal={handleToggleModal} editContactData={editContactData} />
          ) : (
            <ContactForm closeModal={handleToggleModal} />
          )}
        </Modal>
      )}
      {/* {contact.isCreated && <Toast msg={contact.message} show={contact.isCreated} />} */}
    </div>
  );
};

export default Home;
