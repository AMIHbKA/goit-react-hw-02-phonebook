import { Formik, Field } from 'formik';
import { FormField, Form, ErrorMessage } from './RecipeForm.styled';
import * as Yup from 'yup';

const RecipeSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  imageUrl: Yup.string().min(3, 'Too Short!').required('Required'),
  time: Yup.number().positive('!!! >0 !!!').required('Required'),
  servings: Yup.number().positive('!!! >0 !!!').required('Required'),
  calories: Yup.number().positive('!!! >0 !!!').required('Required'),
  difficulty: Yup.string().oneOf(['easy', 'medium', 'hard']).required(),
});

//01:15:50

export const RecipeForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        imageUrl: '',
        time: 0,
        servings: 0,
        calories: 0,
        difficulty: 'easy',
      }}
      validationSchema={RecipeSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <Form>
        <FormField>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField>
          Image
          <Field name="imageUrl" />
          <ErrorMessage name="imageUrl" component="span" />
        </FormField>
        <FormField>
          Time
          <Field name="time" type="number" />
          <ErrorMessage name="time" component="span" />
        </FormField>
        <FormField>
          Servings
          <Field name="servings" type="number" />
          <ErrorMessage name="servings" component="span" />
        </FormField>
        <FormField>
          Calories
          <Field name="calories" type="number" />
          <ErrorMessage name="calories" component="span" />
        </FormField>
        <FormField>
          Difficulty
          <Field as="select" name="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Field>
          <ErrorMessage name="difficulty" component="span" />
        </FormField>
        <button type="submit">Save recipe</button>
      </Form>
    </Formik>
  );
};
