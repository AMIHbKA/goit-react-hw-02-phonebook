import { Component } from 'react';
import { nanoid } from 'nanoid';

export class PhonebookForm extends Component {
  state = {
    name: '',
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
    this.setState({ name: '' });
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
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
