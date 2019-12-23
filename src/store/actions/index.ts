import actionTypes from '../actionTypes';

const { CREATE_CONTACT, CLOSE_TOAST } = actionTypes;

export const createContact = (payload: {}): {} => ({
  type: CREATE_CONTACT,
  payload,
});

export const closeToast = (): {} => ({
  type: CLOSE_TOAST,
});
