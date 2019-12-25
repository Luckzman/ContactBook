import React from 'react';
import { mount } from 'enzyme';
import * as redux from 'react-redux';
import ContactCard from './';

describe('Home Page', () => {
  it('should render with error', () => {
    const contact = {
      id: '98fab1cd-3f4a-4156-a34a-d3b0bd8e00f2',
      contact: {
        name: 'Jon Doe',
        phone: '234234',
        email: 'Joh_doe@gmail.com',
      },
      isLiked: true,
    };
    const contacts = jest.spyOn(redux, 'useSelector');
    contacts.mockReturnValue(contact);
    const props = {
      contact,
      favorite: contact,
      displayModal: jest.fn(),
    };
    mount(<ContactCard {...props} />);
  });
});
