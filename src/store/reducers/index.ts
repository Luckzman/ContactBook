import actionTypes from '../actionTypes';
import { saveState, loadState } from '../../utils/localStorage';
import { v4 } from 'node-uuid';
const { CREATE_CONTACT, GET_ALL_CONTACTS, LIKE_FAVORITE_CONTACT } = actionTypes;

interface Contact {
  id: string;
  isLiked: boolean;
  contact: {
    name: string;
    phone: string;
    email: string;
  };
}

interface Contacts {
  contacts: Contacts[];
}

interface State {
  contact: Contact;
  contacts: Contact[];
}

// const initialState = { id: v4(), isLiked: false, isCreated: false, msg: '' };

export const contact = (state = {}, action: any) => {
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

export const contacts = (state = [], action: any) => {
  switch (action.type) {
    case GET_ALL_CONTACTS:
      return action.payload || state;
    case LIKE_FAVORITE_CONTACT:
      console.log(state, 'state');
      // const contact = state.map((contact: Contact) => {
      //   const { id, isLiked } = action.payload;
      //   if (contact.id === id) {
      //     contact.isLiked = isLiked;
      //   }
      // });
      // console.log(contact);
      // saveState(contact);
      return action.payload;
    default:
      return state;
  }
};
