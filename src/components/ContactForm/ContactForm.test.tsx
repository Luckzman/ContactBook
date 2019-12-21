import React from 'react';
import { shallow } from 'enzyme';
import ContactForm from './';

it('renders without crashing', () => {
  shallow(<ContactForm />);
});
