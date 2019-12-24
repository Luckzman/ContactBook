import actionTypes from '../actionTypes';
const {
  CREATE_CONTACT,
  LIKE_ALL_CONTACT,
  EDIT_CONTACT,
  GET_FAVORITE_CONTACT,
  GET_ALL_CONTACTS,
  LIKE_FAVORITE_CONTACT,
} = actionTypes;

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
    case LIKE_ALL_CONTACT:
      return action.payload || state;
    case GET_FAVORITE_CONTACT:
      return action.payload;
    case EDIT_CONTACT:
      return action.payload;
    default:
      return state;
  }
};

export const favorites = (state = [], action: any) => {
  switch (action.type) {
    case GET_FAVORITE_CONTACT:
      return action.payload || state;
    case LIKE_FAVORITE_CONTACT:
      return action.payload || state;
    default:
      return state;
  }
};
