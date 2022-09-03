import { createStore } from 'redux';
import { ADD_CONTACTS } from './types';

const initialStore = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};
// import reducer from './reducer';
const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case ADD_CONTACTS:
      const newContactItem = [...store.contacts, action.payload];
      return { ...store, contacts: newContactItem };

    default:
      return store;
  }
};

const store = createStore(
  reducer,
  //   initialStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
console.log('store', store);
// import { ADD_BOOK, REMOVE_BOOK, SET_FILTER } from "./types";

// const initialStore = {
//     books: [],
//     filter: "",
// }

// const reducer = (store = initialStore, {type, payload}) => {
//     switch(type) {
//         case ADD_BOOK:
//             return {...store, books: [...store.books, payload]};
//         case REMOVE_BOOK:
//             const newBooks = store.books.filter(({id}) => id !== payload);
//             return {...store, books: newBooks};
//         case SET_FILTER:
//             return {...store, filter: payload};
//         default:
//             return store;
//     }
// }

// export default reducer;
