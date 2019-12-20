import React from 'react';
import Navbar from '../../components/Navbar';

const Home: React.FC = () => {

  const handleNewContact = () => {}

  return (
    <div>
      <Navbar handleNewContact={handleNewContact} />
      <div className="container">Main Area</div>
    </div>
  );
};

export default Home;
