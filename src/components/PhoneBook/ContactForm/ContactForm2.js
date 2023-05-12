import { nanoid } from 'nanoid';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .trim()
    .required('Required'),
  number: Yup.string()
    .min(5, 'Too Short!')
    .max(19, 'Too Long!')
    .trim()
    .required('Required'),
});

export const ContactForm2 = ({ onContactAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactsSchema}
      onSubmit={values => {
        console.log({ ...values });
        onContactAdd({ ...values, id: nanoid() });
      }}
    >
      <Form>
        <Field
          type="text"
          name="name"
          // value={this.state.name}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я][0-9]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          // onChange={this.onChangeHandler}
          required
        />
        <Field
          type="tel"
          name="number"
          // value={this.state.number}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          // onChange={this.onChangeHandler}
          required
        />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   onChangeHandler = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   onSubmitHandler = event => {
//     event.preventDefault();

//     this.props.onContactAdd({ ...this.state, id: nanoid(6) });
//     this.clearForm();
//   };

//   clearForm() {
//     this.setState({ name: '', number: '' });
//   }

//   render() {
//     return (
//       <form onSubmit={this.onSubmitHandler}>
//         <input
//           type="text"
//           name="name"
//           value={this.state.name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я][0-9]]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           onChange={this.onChangeHandler}
//           required
//         />
//         <input
//           type="tel"
//           name="number"
//           value={this.state.number}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           onChange={this.onChangeHandler}
//           required
//         />
//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }
