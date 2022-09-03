import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(
  reducer,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

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
