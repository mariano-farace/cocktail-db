import React from "react";
import { Link } from "react-router-dom";
import { PrimaryLinkBtn } from "../components/styled/Container.styled";

function Error() {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>oops! it's a dead end</h1>
        <PrimaryLinkBtn to="/">back home</PrimaryLinkBtn>
      </div>
    </section>
  );
}

export default Error;
