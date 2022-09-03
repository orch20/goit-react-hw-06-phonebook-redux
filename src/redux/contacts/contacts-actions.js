import { ADD_CONTACTS, REMOVE_CONTACTS } from './contacts-types';
import { nanoid } from 'nanoid';

export const addContacts = payload => {
  return {
    type: ADD_CONTACTS,
    payload: {
      id: nanoid(4),
      ...payload,
    },
  };
};

export const removeContacts = payload => {
  return {
    type: REMOVE_CONTACTS,
    payload,
  };
};
