import actionTypes from '../actionTypes';

const { CREATE_CONTACT, CLOSE_TOAST } = actionTypes;

export const contacts = (state = {}, action: { payload: {}; type: string }): {} => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contact: action.payload,
        isCreated: true,
        message: 'Contact successfully created',
      };
    case CLOSE_TOAST:
      return {
        ...state,
        isCreated: false,
      };
    default:
      return state;
  }
};
