import styled from 'styled-components';

export const Button = styled.button`
  padding: 3px 13px;
  border-radius: 5px;
  border: 1px solid black;
  text-transform: capitalize;
  font-weight: 400;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 5px;
  }
  :hover {
    background-color: dodgerblue;
    color: white;
    transition: box-shadow 250ms linear;
 
  }
`;