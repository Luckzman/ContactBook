import { Contact } from '../store/types';

export const loadState = (contact: string): any => {
  try {
    const serializedState = localStorage.getItem(contact);
    if (serializedState === null) {
      return;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return;
  }
};

export const saveState = (contact: string, state: Contact[]): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(contact, serializedState);
  } catch (err) {
    console.log(err);
  }
};
