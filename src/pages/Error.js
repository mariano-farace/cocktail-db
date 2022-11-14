import React from "react";
import styled from "styled-components";
import { PrimaryLinkBtn } from "../components/styled/SharedStyles.styled";

const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: 5rem 0;

  div {
    text-align: center;
    text-transform: capitalize;
  }
`;

function Error() {
  return (
    <Section>
      <div>
        <h1>oops! it's a dead end</h1>
        <PrimaryLinkBtn to="/">back home</PrimaryLinkBtn>
      </div>
    </Section>
  );
}

export default Error;
