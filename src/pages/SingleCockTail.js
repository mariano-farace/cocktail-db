import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import Loading from "../components/Loading";
import {
  PrimaryLinkBtn,
  SectionTitle,
} from "../components/styled/SharedStyles.styled";
import styled from "styled-components";

const Container = styled.section`
  padding: 5rem 0;
  text-align: center;
`;

const DrinkContainer = styled.div`
  width: var(--smallWidth);
  max-width: var(--fullWidth);
  margin: 0 auto;
  text-align: left;
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 3rem;
    align-items: center;
  }
`;

const DrinkInfo = styled.div`
  padding-top: 2rem;
  @media screen and (min-width: 992px) {
    padding-top: 0;
  }
`;

const Img = styled.img`
  border-radius: var(--mainBorderRadius);
`;

const InfoUnit = styled.p`
  font-weight: bold;
  text-transform: capitalize;
  line-height: 1.8;
`;

const GreenLabel = styled.span`
  background: var(--primaryLightColor);
  padding: 0.25rem 0.5rem;
  border-radius: var(--mainBorderRadius);
  color: var(--primaryColor);
  margin-right: 0.5 rem;
  margin-right: 0.5rem;
`;

const StyleSpan = styled.span`
  margin-right: 0.5rem;
`;

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

function SingleCockTail() {
  const { id } = useParams();
  const { loading, setLoading } = useGlobalContext();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    const getCocktailData = async () => {
      try {
        //TODO usar axios y comprobar el handling del error
        const response = await fetch(`${url}${id}`);
        const data = await response.json();

        if (data.drinks) {
          //To create a new object from the fetched data
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
          } = data.drinks[0];

          const ingredients = [
            { ingr: strIngredient1, msr: strMeasure1 },
            { ingr: strIngredient2, msr: strMeasure2 },
            { ingr: strIngredient3, msr: strMeasure3 },
            { ingr: strIngredient4, msr: strMeasure4 },
            { ingr: strIngredient5, msr: strMeasure5 },
          ];

          const newCockTail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCockTail);
        } else {
          //TODO comprobar que este error se maneja bien
          //TODO ver de redirigir a la pagina de error
          setCocktail(null);
        }
        setLoading(false);
      } catch (e) {
        //TODO handle de este error y mostrar la pagina de error!!!!
        console.log(e);
        setLoading(false);
      }
    };
    getCocktailData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  //In case some kind of error happens and there is no cocktail to display
  if (!cocktail) {
    return <SectionTitle>no cocktail to display</SectionTitle>;
  }

  return (
    <Container>
      <PrimaryLinkBtn to="/">back home</PrimaryLinkBtn>
      <SectionTitle>{cocktail.name}</SectionTitle>
      <DrinkContainer>
        <Img src={cocktail.image} alt={cocktail.name} />
        <DrinkInfo>
          <InfoUnit>
            <GreenLabel> name :</GreenLabel>
            {cocktail.name}
          </InfoUnit>
          <InfoUnit>
            <GreenLabel> category :</GreenLabel>
            {cocktail.category}
          </InfoUnit>
          <InfoUnit>
            <GreenLabel> info :</GreenLabel>
            {cocktail.info}
          </InfoUnit>
          <InfoUnit>
            <GreenLabel> glass :</GreenLabel>
            {cocktail.glass}
          </InfoUnit>
          <InfoUnit>
            <GreenLabel>instructions :</GreenLabel>
            {cocktail.instructions}
          </InfoUnit>
          <InfoUnit>
            <GreenLabel>ingredients :</GreenLabel>

            {cocktail.ingredients.map((item, index) => {
              const ingredient = item.ingr ? (
                <StyleSpan key={index}>
                  -{item.ingr}
                  {item.msr && <>: {item.msr}</>}
                </StyleSpan>
              ) : null;
              return ingredient;
            })}
          </InfoUnit>
        </DrinkInfo>
      </DrinkContainer>
    </Container>
  );
}

export default SingleCockTail;
