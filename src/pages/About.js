import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../components/styled/Container.styled";

const Section = styled.section`
  padding: 5rem 0;
  width: var(--smallWidth);
  max-width: var(--maxWidth);
  margin: 0 auto;

  p {
    line-height: 2rem;
    font-weight: 400;
    letter-spacing: 2px;
  }
`;

function About() {
  return (
    <Section>
      <SectionTitle>about us</SectionTitle>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus omnis
        commodi cumque ex a facilis atque nemo eveniet corrupti recusandae
        magni, quasi fugit quisquam. Sint quisquam nostrum cumque dignissimos
        consequuntur corporis, asperiores ad recusandae aut quis explicabo,
        optio deserunt quidem.
      </p>
    </Section>
  );
}

export default About;
