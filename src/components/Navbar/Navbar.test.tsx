import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './';

it('renders without crashing', () => {
  const wrapper = shallow(<Navbar />);
  expect(wrapper).toMatchSnapshot();
});
