import { rootReducer } from './index';

export interface Payload {
  name: string;
  phone: string;
  email: string;
}

export interface Contact {
  id: string;
  isLiked: boolean;
  contact: Payload;
}

export interface Contacts {
  contacts: Contact[];
}

export interface Favorites {
  favorites: Contact[];
}

export type RootState = ReturnType<typeof rootReducer>;
