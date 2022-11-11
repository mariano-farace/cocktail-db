import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

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
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          ></input>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
