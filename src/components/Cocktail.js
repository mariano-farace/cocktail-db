import React from "react";
import { PrimaryLinkBtnSmall } from "../components/styled/Container.styled";
import styled from "styled-components";

const Container = styled.article`
  background: var(--mainWhite);
  margin-bottom: 2rem;
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--mainBorderRadius);

  &:hover {
    box-shadow: var(--darkShadow);
  }

  img {
    height: 20rem;
    object-fit: cover;
    border-top-left-radius: var(--mainBorderRadius);
    border-top-right-radius: var(--mainBorderRadius);
  }
`;

const CocktailInfo = styled.div`
  padding: 1.5rem;
  h3,
  h4,
  p {
    margin-bottom: 0.3rem;
  }
  h3 {
    font-size: 2rem;
  }
  p {
    color: var(--darkGrey);
    margin-bottom: 0.5rem;
  }
`;

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <Container>
      <div>
        <img src={image} alt={name} />
      </div>
      <CocktailInfo>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <PrimaryLinkBtnSmall to={`/cocktail/${id}`}>
          details
        </PrimaryLinkBtnSmall>
      </CocktailInfo>
    </Container>
  );
};

export default Cocktail;
