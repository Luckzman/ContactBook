import React from 'react';
import { mount } from 'enzyme';
import * as redux from 'react-redux';
import Home from './';

describe('Home Page', () => {
  let wrapper;
  const state = {
    contacts: [
      {
        id: '98fab1cd-3f4a-4156-a34a-d3b0bd8e00f2',
        contact: {
          name: 'Jon Doe',
          phone: '234234',
          email: 'Joh_doe@gmail.com',
        },
        isLiked: true,
      },
      {
        id: '78fab1cd-3f4a-4156-a34a-d3b0bd8e00f2',
        contact: {
          name: 'John Brown',
          phone: '933834',
          email: 'John_brown@gmail.com',
        },
        isLiked: false,
      },
    ],
  };
  const contacts = jest.spyOn(redux, 'useSelector');
  contacts.mockReturnValue(state.contacts);
  it('should render with error', () => {
    wrapper = mount(<Home />);
  });
  it('opens modal when toggle modal button is clicked', () => {
    wrapper = mount(<Home />);
    const button = wrapper.find("[data-testid='navbar-btn']");
    button.simulate('click');
    expect(wrapper.find("[data-testid='modal']")).toHaveLength(1);
  });
  it('open edit form when edit button is clicked on contact card', () => {
    wrapper = mount(<Home />);
    const editButton = wrapper.find("[data-testid='edit']").first();
    editButton.simulate('click');
    expect(wrapper.find("[data-testid='modal']")).toHaveLength(1);
  });
  it('shows all contacts card when brand name is clicked', () => {
    wrapper = mount(<Home />);
    const brandBtn = wrapper.find("[data-testid='brand']");
    brandBtn.simulate('click');
    expect(wrapper.find("[data-testid='all-contacts']")).toHaveLength(1);
    expect(wrapper.find("[data-testid='card']")).toHaveLength(2);
  });
  it('toggle like button when when is clicked', () => {
    wrapper = mount(<Home />);
    const unlikeBtn = wrapper.find("[data-testid='unlike-btn']").first();
    unlikeBtn.simulate('click');
    wrapper.update();
    expect(wrapper.find("[data-testid='like-btn']").first()).toHaveLength(1);  
  });
});
