import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangeHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmitHandler = event => {
    event.preventDefault();

    this.props.onContactAdd({ ...this.state, id: nanoid(6) });
    this.clearForm();
  };

  clearForm() {
    this.setState({ name: '', number: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={this.onChangeHandler}
          required
        />
        <input
          type="tel"
          name="number"
          value={this.state.number}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={this.onChangeHandler}
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
