import { FILTER_CONTACTS } from './filter-types';

export const setFilter = payload => {
  return {
    type: FILTER_CONTACTS,
    payload,
  };
};
