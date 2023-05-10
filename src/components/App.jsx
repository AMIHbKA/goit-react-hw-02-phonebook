import { Component } from 'react';
import { PhonebookForm } from './PhoneBook/PhonebookForm';
import { ContactsList } from './PhoneBook/ContactsList/ContactsList';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  render() {
    const contacts = this.state.contacts;
    return (
      <>
        <h2>Phonebook</h2>
        <PhonebookForm onContactAdd={this.addContact} />
        <h2>Contacts</h2>
        <ContactsList contacts={contacts} />
      </>
    );
  }
}
