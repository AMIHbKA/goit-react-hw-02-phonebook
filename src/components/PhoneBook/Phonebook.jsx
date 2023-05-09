import { Component } from 'react';
import { nanoid } from 'nanoid';

export class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onFormSubmitHandler = event => {
    event.preventDefault();
    event.target.reset();
  };

  render() {
    const { name, contacts } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.onFormSubmitHandler}>
          <label name="name">Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
        <ul>
          {contacts.length > 0 &&
            contacts.map(contact => {
              <li>{contact.name}</li>;
            })}
        </ul>
      </>
    );
  }
}
