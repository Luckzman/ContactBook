import actionTypes from '../actionTypes';
import { Contact } from '../types';
import { CreateContactAction, ContactsActions } from '../actions/types';

const {
  CREATE_CONTACT,
  LIKE_ALL_CONTACT,
  EDIT_CONTACT,
  GET_FAVORITE_CONTACT,
  GET_ALL_CONTACTS,
  LIKE_FAVORITE_CONTACT,
} = actionTypes;

const initialState: Contact = {
  id: '',
  contact: {
    name: '',
    email: '',
    phone: '',
  },
  isLiked: false,
};

export const contact = (state = initialState, action: CreateContactAction): Contact => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const contacts = (state: Contact[] = [], action: ContactsActions): Contact[] => {
  switch (action.type) {
    case GET_ALL_CONTACTS:
      return action.payload;
    case LIKE_ALL_CONTACT:
      return action.payload;
    case EDIT_CONTACT:
      return action.payload;
    default:
      return state;
  }
};

export const favorites = (state: Contact[] = [], action: ContactsActions): Contact[] => {
  switch (action.type) {
    case GET_FAVORITE_CONTACT:
      return action.payload;
    case LIKE_FAVORITE_CONTACT:
      return action.payload;
    default:
      return state;
  }
};
