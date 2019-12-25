import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './';

it('renders without crashing', () => {
  const props = {
    handleToggleModal: jest.fn(),
    handleLikedContact: jest.fn(),
    handleAllContact: jest.fn(),
    displayFavorite: false,
  };
  shallow(<Navbar {...props} />);
});
