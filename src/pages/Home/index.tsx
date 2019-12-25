import React, { useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import ContactCard from '../../components/ContactCard';
import Navbar from '../../components/Navbar';
import Modal from '../../components/Modal';
import { getAllContacts, getFavouriteContacts } from '../../store/actions';
import ContactForm from '../../components/ContactForm';
import { RootState } from '../../store/types';
import './Home.scss';

const Home: React.FC = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [displayFavorite, setdisplayFavorite] = useState(false);
  const [editContactData, setEditContactData] = useState<any>({});
  const contacts = useSelector((state: RootState) => state.contacts, shallowEqual);
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites, shallowEqual);
  const handleToggleModal = (data?: {}): void => {
    setEditContactData(data);
    setToggleModal(!toggleModal);
  };

  const handleAllContact = (): void => {
    setdisplayFavorite(false);
    dispatch(getAllContacts());
  };

  const handleGetFavoriteContact = (): void => {
    setdisplayFavorite(true);
    dispatch(getFavouriteContacts());
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
      <image
        width="134px"
        height="161px"
        href="data:image/png;base64,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"
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
