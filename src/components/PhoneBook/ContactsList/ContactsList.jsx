import { Component } from 'react';

export class ContactsList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
          </li>
        ))}
      </ul>
    );
  }
}
