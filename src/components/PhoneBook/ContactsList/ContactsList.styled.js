import styled from 'styled-components';
import { Trash as TrashIcon } from '../UI/icons';
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin-top: 2em;
  padding-inline: 0;
  list-style: none;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: auto;
  white-space: nowrap;
`;

export const Trash = styled(TrashIcon)`
  width: 1em;
  height: 1em;
  padding-right: 1em;
  vertical-align: middle;
  cursor: pointer;

  &:hover,
  :focus {
    fill: blue;
  }
`;
