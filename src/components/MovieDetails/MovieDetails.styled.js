import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PosterPath = styled.img`
    width: 200px;
    height: auto;
    margin: 10px 5px;
`;

export const DetailsDiv = styled.div`
  display: flex;
  column-gap: 30px;
  border-bottom: 1px solid black;
`;

export const Side = styled.div`
  display: block;
`;

export const Line = styled.ul`
  border-bottom: 1px solid black;
`;

export const StyledBackLink = styled(Link)`
  margin-left: 5px;
  text-decoration: none;
  color:rgb(105, 15, 194);;
`;

export const LinkStyle = styled(Link)`
  color: rgb(105, 15, 194);
  font-family: 'Montserrat', sans-serif;
  transition: all 0.3s ease;

  &:hover {
    color: rgb(85, 10, 155);
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

