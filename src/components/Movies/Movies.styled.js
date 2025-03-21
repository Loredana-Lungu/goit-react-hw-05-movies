import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: rgb(105, 15, 194);
`;

export const Li = styled.li`
  margin-top: 7px;
`;

export const SearchInput = styled.input`
  width: 300px;
  height: 40px;
  margin-right: 10px;
  padding: 0 10px;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 5px;
  font-size: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  &:hover {
    border-color: rgb(105, 15, 194);
  }

  &:focus {
    outline: none;
    border-color: rgb(105, 15, 194);
    box-shadow: 0 2px 5px rgba(105, 15, 194, 0.3);
  }
`;

export const SearchButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: rgb(105, 15, 194);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px; 
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 

  &:hover {
    background-color: rgb(85, 10, 155); 
  }

  &:active {
    background-color: rgb(65, 5, 125);
  }
`;
