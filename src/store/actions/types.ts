import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import actionTypes from '../actionTypes';
import { RootState, Contact } from '../types';
const {
  CREATE_CONTACT,
  LIKE_ALL_CONTACT,
  EDIT_CONTACT,
  GET_FAVORITE_CONTACT,
  GET_ALL_CONTACTS,
  LIKE_FAVORITE_CONTACT,
} = actionTypes;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, null, Action<string>>;

export interface LikePayload {
  id: string;
  input: {
    name: string;
    email: string;
    phone: string;
  };
}

export interface CreateContactAction {
  type: typeof CREATE_CONTACT;
  payload: Contact;
}

export interface EditContactAction {
  type: typeof EDIT_CONTACT;
  payload: Contact[];
}

export interface LikeAllContactAction {
  type: typeof LIKE_ALL_CONTACT;
  payload: Contact[];
}

export interface GetAllContactAction {
  type: typeof GET_ALL_CONTACTS;
  payload: Contact[];
}

export interface GetFavoriteContactAction {
  type: typeof GET_FAVORITE_CONTACT;
  payload: Contact[];
}

export interface LikeFavoriteContactAction {
  type: typeof LIKE_FAVORITE_CONTACT;
  payload: Contact[];
}

export type ContactsActions =
  | GetAllContactAction
  | LikeAllContactAction
  | EditContactAction
  | GetFavoriteContactAction
  | LikeFavoriteContactAction;
