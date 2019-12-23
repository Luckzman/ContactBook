import React from 'react';
import { shallow } from 'enzyme';
import Toast from './';

it('renders without crashing', () => {
  const props = { show: true, msg: 'test' };
  shallow(<Toast {...props} />);
});
