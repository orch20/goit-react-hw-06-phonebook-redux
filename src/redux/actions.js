import { ADD_CONTACTS, REMOVE_CONTACTS, FILTER_CONTACTS } from './types';
import { nanoid } from 'nanoid';

export const addContacts = payload => {
  console.log('payload in actions', payload);
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

export const setFilter = payload => {
  return {
    type: FILTER_CONTACTS,
    payload,
  };
};
