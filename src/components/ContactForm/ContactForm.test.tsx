import React from 'react';
import { mount } from 'enzyme';
import ContactForm from './';

describe('Home Page', () => {
  let wrapper;
  const props = {
    closeModal: jest.fn(),
    handleOnChange: jest.fn(),
  };
  it('should render with error', () => {
    mount(<ContactForm {...props} />);
  });
  it('opens modal when toggle modal button is clicked', () => {
    const event = {
      preventDefault: jest.fn(),
      target: { value: 'my-value' },
    };
    wrapper = mount(<ContactForm {...props} />);
    const input = wrapper
      .find('input')
      .first()
      .simulate('change', event);
    expect(input.props().value).toEqual('');
  });
  it('should error message when inputs are not validated when submit button is clicked', () => {
    wrapper = mount(<ContactForm {...props} />);
    const submitBtn = wrapper.find('button');
    submitBtn.simulate('click');
    expect(
      wrapper
        .find('p')
        .first()
        .text(),
    ).toContain('name is required');
  });
  it('should close form when inputs are validated when submit button is clicked', () => {
    const event1 = { target: { value: 'my-name' } };
    const event2 = { target: { value: 'email@email.com' } };
    wrapper = mount(<ContactForm {...props} />);
    const submitBtn = wrapper.find('button');
    wrapper
      .find('input')
      .first()
      .simulate('change', event1);
    wrapper
      .find("[name='email']")
      .first()
      .simulate('change', event2);
    submitBtn.simulate('click');
    expect(wrapper.find("[data-testid='modal']")).toHaveLength(0);
  });
});
