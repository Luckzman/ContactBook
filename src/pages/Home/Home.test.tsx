import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from './';

describe('Home', () => {
  it('renders without crashing', () => {
    shallow(<Home />);
  });
  it('opens modal when toggle modal button is clicked', () => {
    const wrapper = mount(<Home />);
    const button = wrapper.find("[data-testid='navbar-btn']");
    button.simulate('click');
    expect(wrapper.find("[data-testid='modal']")).toHaveLength(1);
  });
});
