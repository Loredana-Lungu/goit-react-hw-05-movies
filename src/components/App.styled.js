import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    margin: 0 auto;
    padding: 0 8px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 16px;
    padding: 8px 0;
    margin-bottom: 16px;
    border-bottom: 1px solid black;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 25px;
  font-family: 'Montserrat', sans-serif;
  margin-left: 20px;
  text-decoration: none;
  transition: all 0.3s ease; /* Tranziție lină pentru toate proprietățile */

  &.active {
    color: rgb(105, 15, 194);
    margin-left: 20px;
    text-decoration: underline;
  }

  &:hover {
    text-decoration: underline;
    color: rgb(105, 15, 194); /* Schimbă culoarea la hover */
    transform: scale(1.1); /* Mărește link-ul ușor */
  }

  &:active {
    transform: scale(1); /* Revine la dimensiunea inițială la click */
  }
`;
