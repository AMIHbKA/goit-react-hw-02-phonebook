import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikError,
  Field as FormikField,
} from 'formik';

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-weight: 500;
  border-radius: 4px;
`;

export const ErrorMessage = styled(FormikError)`
  color: red;
`;

export const Form = styled(FormikForm)`
  width: 300px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid blue;
  border-radius: 4px;
  box-shadow: 0 2px 4px blue;
  margin: 0 auto;
`;

export const Button = styled.button`
  padding: 0.1em 0.3em;
  font-family: inherit;
  font-weight: 500;
  border-style: solid;
  border-radius: 4px;
  color: blue;
  border-color: blue;
  cursor: pointer;

  &:hover,
  :focus {
    color: #fff;
    box-shadow: 0 2px 4px blue;
    background-color: blue;
  }

  &:focus {
    outline: none;
  }
`;

export const Field = styled(FormikField)`
  border: 1px solid blue;
  border-radius: 4px;
  font-size: 1em;

  &:focus {
    border-color: grey;
    outline: none;
  }
`;
