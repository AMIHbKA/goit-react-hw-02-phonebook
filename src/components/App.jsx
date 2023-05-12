import { Component } from 'react';
import { ContactForm2 } from './PhoneBook/ContactForm/ContactForm2';
import { ContactsList } from './PhoneBook/ContactsList/ContactsList';
import { Filter } from './PhoneBook/Filter/Filter';
import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onAddContact = newContact => {
    this.setState(prevState => {
      const { contacts } = prevState;

      const alredyInContacts = contacts.some(
        ({ name }) => name === newContact.name
      );

      if (alredyInContacts) {
        alert(`${newContact.name} is already in contacts`);
        return;
      }

      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  onFilterChange = ({ currentTarget: { value } }) => {
    this.setState({ filter: value });
  };

  onDeleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const optimizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(optimizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getFilteredContacts();

    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm2 onContactAdd={this.onAddContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onFilter={this.onFilterChange} />
        <ContactsList
          contacts={visibleContacts}
          onDelete={this.onDeleteContact}
        />
      </>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};
