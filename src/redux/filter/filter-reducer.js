import { FILTER_CONTACTS } from './filter-types';

const initialStore = '';

const filterReducer = (store = initialStore, action) => {
  switch (action.type) {
    case FILTER_CONTACTS:
      return action.payload;

    default:
      return store;
  }
};

export default filterReducer;
