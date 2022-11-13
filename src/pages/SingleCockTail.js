import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import Loading from "../components/Loading";
import { PrimaryLinkBtn } from "../components/styled/Container.styled";

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
    return <h2 className="section-title">no cocktail to display</h2>;
  }

  return (
    <section className="section cocktail-section">
      <PrimaryLinkBtn to="/">back home</PrimaryLinkBtn>
      <h2 className="section-title">{cocktail.name}</h2>
      <div className="drink">
        <img src={cocktail.image} alt={cocktail.name} />
        <div className="drink-info">
          <p>
            <span className="drink-data"> name :</span>
            {cocktail.name}
          </p>
          <p>
            <span className="drink-data"> category :</span>
            {cocktail.category}
          </p>
          <p>
            <span className="drink-data"> info :</span>
            {cocktail.info}
          </p>
          <p>
            <span className="drink-data"> glass :</span>
            {cocktail.glass}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {cocktail.instructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>

            {cocktail.ingredients.map((item, index) => {
              const ingredient = item.ingr ? (
                <span key={index}>
                  {item.ingr}: {item.msr}
                </span>
              ) : null;
              return ingredient;
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

export default SingleCockTail;
