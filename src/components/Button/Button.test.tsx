import React from 'react';
import { shallow } from 'enzyme';
import Button from './';

it('renders without crashing', () => {
  const props = {
    onClick: jest.fn(),
  };
  shallow(<Button {...props}>Submit</Button>);
});
