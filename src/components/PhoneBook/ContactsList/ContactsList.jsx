import { Component } from 'react';

export class ContactsList extends Component {
  render() {
    console.log(this.props);
    return (
      <ul>
        {this.props.contacts.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    );
  }
}
