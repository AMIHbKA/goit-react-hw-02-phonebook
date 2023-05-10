import { Component } from 'react';
import { nanoid } from 'nanoid';

export class PhonebookForm extends Component {
  state = {
    name: '',
  };

  onChangeHandler(event) {
    // const { name, value } = event.target;
    // this.setState({ [name]: value });
    // console.log(event.target);
    console.dir(event.target.value);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.onSubmit({ ...this.state, id: nanoid() });
    console.log('submit event');
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          name="name"
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
