import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";

const StyledNav = styled.nav`
  background: var(--mainWhite);
  height: 5rem;
  display: flex;
  align-items: center;
  border-bottom: 2px solid var(--primaryColor);
  box-shadow: var(--lightShadow);

  ul {
    display: flex;
    align-items: center;

    a {
      text-transform: capitalize;
      display: inline-block;
      font-weight: bold;
      margin-right: 0.5rem;
      font-weight: 400;
      letter-spacing: 2px;
      font-size: 1.2rem;
      padding: 0.25rem 0.5rem;
      transition: var(--mainTransition);

      &:hover {
        color: var(--primaryColor);
      }
    }
  }
`;

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: var(--smallWidth);
  margin: 0 auto;
  max-width: var(--fullWidth);
`;

const Logo = styled.img`
  width: 12rem;
`;

function NavBar() {
  return (
    <StyledNav>
      <Container>
        <Link to="/">
          <Logo src={logo} alt="cocktail db logo" />
        </Link>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </Container>
    </StyledNav>
  );
}

export default NavBar;
