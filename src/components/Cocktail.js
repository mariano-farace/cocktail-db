import React from "react";
import { PrimaryLinkBtnSmall } from "../components/styled/Container.styled";

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <PrimaryLinkBtnSmall to={`/cocktail/${id}`}>
          details
        </PrimaryLinkBtnSmall>
      </div>
    </article>
  );
};

export default Cocktail;
