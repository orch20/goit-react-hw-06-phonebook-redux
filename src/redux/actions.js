import { ADD_CONTACTS } from './types';
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
