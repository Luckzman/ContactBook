import React from 'react';
import { shallow } from 'enzyme';
import Input from './';

it('renders without crashing', () => {
  const props = {
    name: 'test',
    errorMsg: 'test-error',
    value: 'test',
    label: 'test',
    onChange: jest.fn(),
    placeholder: 'test',
  };
  shallow(<Input {...props} />);
});
