import React, { createContext, useContext, useEffect, useState } from "react";
//TODO cambiar fetch por axios

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = createContext();
//Notar que no hace falta luego pasar la prop children cuando lo uses
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState();
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  //TODO ver que pasa con la callback
  //TODO moverla adentro del use effect!

  useEffect(() => {
    const fetchDrinks = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url}${searchTerm}`);
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          const newCockTails = drinks.map((item) => {
            const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
              item;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            };
          });
          setCocktails(newCockTails);
        } else {
          setCocktails([]);
        }
        setLoading(false);
      } catch (e) {
        //TODO handle this error
        console.log(e);
        setLoading(false);
      }
    };
    fetchDrinks();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{ loading, searchTerm, cocktails, setSearchTerm, setLoading }}
    >
      {/* all the components that'd like later to consume the context have to be wrapped inside the provider component.
       */}
      {children}
    </AppContext.Provider>
  );
};

//Esta función esta hecha para consumer el context. Se exporta por default
export const useGlobalContext = () => {
  const context = useContext(AppContext);
  return context;
};

export { AppProvider };
