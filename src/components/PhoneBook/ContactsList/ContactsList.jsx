import PropTypes from 'prop-types';
import { List, Trash } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Trash width={18} height={18} onClick={() => onDelete(id)} />
          {name}: {number}
        </li>
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
