import React, { useContext, useEffect, useState } from "react";
//TODO cambiar fetch por axios

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState();
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newCockTails = drinks.map((item) => {
          const { idDrink, srtDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          return {
            id: idDrink,
            name: srtDrink,
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
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{ loading, searchTerm, cocktails, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  return context;
};

export { AppContext, AppProvider };
