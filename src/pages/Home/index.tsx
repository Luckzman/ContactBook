import React from 'react';
import ContactCard from '../../components/ContactCard';
import Navbar from '../../components/Navbar';
import './Home.scss';

const Home: React.FC = () => {
  const handleNewContact = () => {};

  return (
    <div className="home">
      <Navbar handleNewContact={handleNewContact} />
      <div className="container">
        <h2>All Contacts</h2>
        <ContactCard />
      </div>
    </div>
  );
};

export default Home;
