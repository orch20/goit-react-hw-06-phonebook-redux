import React, { useState, useEffect } from 'react';
import { FormContacts } from './FormContacts/FormContacts';
import { RenderContactsList } from './RenderContactsList/RenderContactsList';
import { Filter } from './Filter/Filter';
import { Container } from './Container.styled';

import { useSelector, useDispatch } from 'react-redux';
import { addContacts, removeContacts, setFilter } from '../redux/actions';
import { getContacts, getFilter } from '../redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  // const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const getFilteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const dispatch = useDispatch();

  const formSubmitHandler = payload => {
    const findSimilarContact = contacts.find(
      contact => contact.name === payload.name
    );

    if (findSimilarContact) {
      alert('Contact already exists');
    } else {
      const action = addContacts(payload);
      dispatch(action);
    }
  };
  const deleteContact = payload => {
    const action = removeContacts(payload);
    dispatch(action);
  };

  const filterChange = event => {
    const action = setFilter(event.target.value);
    dispatch(action);
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <FormContacts onSubmitProp={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onFilterChange={filterChange} />
      <>
        <RenderContactsList
          contactsList={getFilteredContacts()}
          onDeleteContact={deleteContact}
        />
      </>
    </Container>
  );
};
