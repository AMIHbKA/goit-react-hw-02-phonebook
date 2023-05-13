import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikError,
  Field as FormikField,
} from 'formik';

export const Form = styled(FormikForm)`
  width: 400px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid #2a2a2a;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ErrorMessage = styled(FormikError)`
  color: tomato;
`;

export const Field = styled(FormField)`
  font-size: inherit;
`;
