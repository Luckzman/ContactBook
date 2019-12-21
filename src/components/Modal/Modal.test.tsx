import React from 'react';
import { shallow } from 'enzyme';
import Modal from './';

it('renders without crashing', () => {
  const props = {
    children: <></>,
    hideModal: jest.fn(),
  };
  shallow(<Modal {...props} />);
});
