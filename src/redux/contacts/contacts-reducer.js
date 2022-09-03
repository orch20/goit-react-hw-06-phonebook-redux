import { ADD_CONTACTS, REMOVE_CONTACTS } from './contacts-types';

const initialStore = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsReducer = (store = initialStore, action) => {
  switch (action.type) {
    case ADD_CONTACTS:
      return [...store, action.payload];

    case REMOVE_CONTACTS:
      return store.filter(({ id }) => id !== action.payload);
    default:
      return store;
  }
};
export default contactsReducer;
