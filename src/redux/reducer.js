import { ADD_CONTACTS, REMOVE_CONTACTS, FILTER_CONTACTS } from './types';

const initialStore = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case ADD_CONTACTS:
      return { ...store, contacts: [...store.contacts, action.payload] };

    case REMOVE_CONTACTS:
      const newContactItem = store.contacts.filter(
        ({ id }) => id !== action.payload
      );
      return { ...store, contacts: newContactItem };

    case FILTER_CONTACTS:
      return { ...store, filter: action.payload };

    default:
      return store;
  }
};

export default reducer;
