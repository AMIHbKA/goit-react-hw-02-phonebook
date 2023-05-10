import { Component } from 'react';
import { PhonebookForm } from './PhoneBook/PhonebookForm';
import { ContactsList } from './PhoneBook/ContactsList/ContactsList';
export class App extends Component {
  state = {
    contacts: [],
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
