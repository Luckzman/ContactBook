import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './';

it('renders without crashing', () => {
  const wrapper = shallow(<NotFound />);
  expect(wrapper).toMatchSnapshot();
});
