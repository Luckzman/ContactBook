import React from 'react';
import { shallow } from 'enzyme';
import ContactCard from './';

it('renders without crashing', () => {
  shallow(<ContactCard />);
});
