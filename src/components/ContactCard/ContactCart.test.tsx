import React from 'react';
import { shallow } from 'enzyme';
import ContactCard from './';

it('renders without crashing', () => {
  const wrapper = shallow(<ContactCard />);
  expect(wrapper).toMatchSnapshot();
});
