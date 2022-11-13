import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";
import styled from "styled-components";

const Container = styled.div`
  padding: 5rem 0;
  margin-top: 1rem;
  padding-bottom: 0;
`;

const StyledForm = styled.form`
  width: var(--smallWidth);
  margin: 0 auto;
  max-width: var(--maxWidth);
  background: var(--mainWhite);
  padding: 2rem 2.5rem;
  text-transform: capitalize;
  border-radius: var(--mainBorderRadius);
  box-shadow: var(--lightShadow);
`;

const FormElements = styled.div`
  label {
    display: block;
    margin-bottom: 1.25rem;
    font-weight: bold;
    letter-spacing: 0.25rem;
    color: var(--primaryColor);
  }

  input {
    width: 100%;
    border: none;
    border-color: transparent;
    background: var(--mainBackground);
    border-radius: var(--mainBorderRadius);
    padding: 0.5rem;
    font-size: 1.2rem;
  }
`;

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  //Will set focus on the input. That's one of the reason for selecting ref instead of UseState
  useEffect(() => {
    searchValue.current.focus();
  }, []);

  //Avoids refreshing the page on ENTER key press
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <FormElements>
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          ></input>
        </FormElements>
      </StyledForm>
    </Container>
  );
}

export default SearchForm;
