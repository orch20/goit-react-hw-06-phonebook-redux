import React, { useState, useEffect } from 'react';
import { FormContacts } from './FormContacts/FormContacts';
import { RenderContactsList } from './RenderContactsList/RenderContactsList';
import { Filter } from './Filter/Filter';
import { Container } from './Container.styled';

import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from '../redux/actions';
import { ContactsContainer } from './RenderContactsList/ContactsContainer.styled';

// const initialValues = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export const App = () => {
  const contacts = useSelector(store => store.contacts);

  // const [contacts, setContacts] = useState([...initialValues]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filterChange = event => {
    setFilter(event.target.value);
  };

  const getFilteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  // const deleteContact = id => {
  //   setContacts(prevContact =>
  //     prevContact.filter(contact => contact.id !== id)
  //   );
  // };
  const dispatch = useDispatch();

  const formSubmitHandler = payload => {
    const action = addContacts(payload);
    dispatch(action);
  };

  // const formSubmitHandler = ({ name, number }) => {
  //   const newContact = { id: nanoid(5), name, number };
  //   const findSimilarContact = contacts.find(contact => contact.name === name);

  //   if (findSimilarContact) {
  //     alert('Contact already exists');
  //   }
  //   // else {
  //   //   setContacts([...contacts, newContact]);
  //   // }
  // };

  return (
    <Container>
      <h1>Phonebook</h1>
      <FormContacts onSubmitProp={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onFilterChange={filterChange} />
      <>
        <RenderContactsList
          contactsList={getFilteredContacts()}
          // onDeleteContact={deleteContact}
        />
      </>
    </Container>
  );
};
