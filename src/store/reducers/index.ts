import actionTypes from '../actionTypes';

const { CREATE_CONTACT, GET_ALL_CONTACTS } = actionTypes;

export const contact = (state = {}, action: any) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return { ...state, ...action.payload, isCreated: true, msg: 'Contact Created Successfully' };
    default:
      return state;
  }
};

export const contacts = (state = [], action: any) => {
  switch (action.type) {
    case GET_ALL_CONTACTS:
      return action.payload || state;
    default:
      return state;
  }
};
