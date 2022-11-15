import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import Cocktail from "./Cocktail";
import { SectionTitle } from "./styled/SharedStyles.styled";
import styled from "styled-components";

const Container = styled.section`
  padding: 5rem 0;
`;

const CocktailListContainer = styled.div`
  width: var(--smallWidth);
  margin: 0 auto;
  max-width: var(--fullWidth);
  display: grid;
  row-gap: 2rem;
  column-gap: 2rem;
  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

function CocktailList() {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <SectionTitle>no cocktails matched your search criteria</SectionTitle>
    );
  }
  return (
    <Container>
      <SectionTitle>cocktails</SectionTitle>
      <CocktailListContainer>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </CocktailListContainer>
    </Container>
  );
}

export default CocktailList;
