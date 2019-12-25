import actionTypes from '../actionTypes';

const {
  CREATE_CONTACT,
  LIKE_ALL_CONTACT,
  EDIT_CONTACT,
  GET_FAVORITE_CONTACT,
  GET_ALL_CONTACTS,
  LIKE_FAVORITE_CONTACT,
} = actionTypes;

import { contacts, contact, favorites } from './';

describe('contacts reducer test', () => {
  const payload = [
    {
      id: 1,
      contacts: {
        name: 'test',
        email: 'test@test.com',
        phone: '234234834',
      },
      isLiked: true,
    },
  ];

  const newContact = {
    id: 1,
    contacts: {
      name: 'test',
      email: 'test@test.com',
      phone: '234234834',
    },
    isLiked: true,
  };

  it('should update store for action type of GET_ALL_CONTACTS', () => {
    expect(contacts([], { type: GET_ALL_CONTACTS, payload })).toEqual(payload);
  });
  it('should update store for action type of LIKE_ALL_CONTACT', () => {
    expect(contacts([], { type: LIKE_ALL_CONTACT, payload })).toEqual(payload);
  });
  it('should update store for action type of GET_ALL_CONTACTS', () => {
    expect(contacts([], { type: GET_ALL_CONTACTS, payload: [] })).toEqual([]);
  });
  it('should update store for action type of LIKE_ALL_CONTACT', () => {
    expect(contacts([], { type: LIKE_ALL_CONTACT, payload: [] })).toEqual([]);
  });
  it('should update store for action type of GET_FAVORITE_CONTACT', () => {
    expect(contacts([], { type: GET_FAVORITE_CONTACT, payload })).toEqual(payload);
  });
  it('should update store for action type of EDIT_CONTACT', () => {
    expect(contacts([], { type: EDIT_CONTACT, payload })).toEqual(payload);
  });
  it('should update store for action type of GET_FAVORITE_CONTACT', () => {
    expect(favorites([], { type: GET_FAVORITE_CONTACT, payload })).toEqual(payload);
  });
  it('should update store for action type of GET_FAVORITE_CONTACT', () => {
    expect(favorites([], { type: GET_FAVORITE_CONTACT, payload: [] })).toEqual([]);
  });
  it('should update store for action type of LIKE_FAVORITE_CONTACT', () => {
    expect(favorites([], { type: LIKE_FAVORITE_CONTACT, payload })).toEqual(payload);
  });
  it('should update store for action type of LIKE_FAVORITE_CONTACT', () => {
    expect(favorites([], { type: LIKE_FAVORITE_CONTACT, payload: [] })).toEqual([]);
  });
  it('should create new data in store for action type of CREATE_CONTACT', () => {
    expect(contact({}, { type: CREATE_CONTACT, payload: newContact })).toEqual(newContact);
  });
  it('should return default state if there is no action', () => {
    expect(contacts([], { type: '' })).toEqual([]);
  });
  it('should return default state if there is no action', () => {
    expect(favorites([], { type: '' })).toEqual([]);
  });
  it('should return default state if there is no action', () => {
    expect(contact({}, { type: '' })).toEqual({});
  });
});
