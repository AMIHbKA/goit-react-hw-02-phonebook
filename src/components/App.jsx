import { Component } from 'react';
import { nanoid } from 'nanoid';
import { PhonebookForm } from './PhoneBook/PhonebookForm';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <PhonebookForm onContactAdd={this.addContact} />
        <h2>Contacts</h2>
      </>
    );
  }
}
