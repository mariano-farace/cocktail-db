import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";

function CocktailList() {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }

  return <div>CocktailList</div>;
}

export default CocktailList;
