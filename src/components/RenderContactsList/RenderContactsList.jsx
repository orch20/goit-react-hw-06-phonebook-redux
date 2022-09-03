import PropTypes from 'prop-types';
import { ContactsContainer, ContactEl } from './ContactsContainer.styled';

export const RenderContactsList = ({ contactsList, onDeleteContact }) => {
  return (
    <ContactsContainer>
      {contactsList.map(({ name, number, id }) => (
        <ContactEl key={id}>
          {' '}
          <span>{name}:</span> <span>{number}</span>
          <button
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </button>
        </ContactEl>
      ))}
    </ContactsContainer>
  );
};

RenderContactsList.propTypes = {
  contactsList: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
