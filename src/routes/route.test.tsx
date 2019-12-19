import React from 'react';
import { shallow } from 'enzyme';
import MainRoute from './';

it('renders without crashing', () => {
  const wrapper = shallow(<MainRoute />);
  expect(wrapper).toMatchSnapshot();
});
