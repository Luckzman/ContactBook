export const loadState = (contact: string): any => {
  try {
    const serializedState = localStorage.getItem(contact);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (contact: string, state: any): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(contact, serializedState);
  } catch (err) {
    console.log(err);
  }
};
