import React from 'react';
import { shallow } from 'enzyme';
import MainRoute from './';

it('renders without crashing', () => {
  shallow(<MainRoute />);
});
