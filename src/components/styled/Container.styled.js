import styled from "styled-components";
import { Link } from "react-router-dom";

// export const colors = {
//   primaryLightColor: "#d4e6a5",
//   primaryColor: "#476a2e",
//   primaryDarkColor: "#c02c03",
//   mainWhite: "#fff",
//   offWhite: "#f7f7f7",
//   mainBackground: "#f1f5f8",
//   mainOverlay: "rgba(35, 10, 36, 0.4)",
//   mainBlack: "#222",
//   mainGrey: "#ececec",
//   darkGrey: "#afafaf",
//   mainRed: "#bd0303",
//   mainTransition: "all 0.3s linear",
//   mainSpacing: "0.3rem",
//   lightShadow: "2px 5px 3px 0px rgba(0, 0, 0, 0.5)",
//   darkShadow: "4px 10px 5px 0px rgba(0, 0, 0, 0.5)",
//   mainBorderRadius: "0.25rem",
//   smallWidth: "85vw",
//   maxWidth: "40rem",
//   fullWidth: "1170px",
// };

export const PrimaryLinkBtn = styled(Link)`
  text-transform: uppercase;
  letter-spacing: var(--mainSpacing);
  padding: 0.45rem 0.8rem;
  display: inline-block;
  transition: var(--mainTransition);
  cursor: pointer;
  font-size: 0.8rem;
  border-radius: var(--mainBorderRadius);
  display: inline-block;
  background: var(--primaryColor);
  color: var(--mainWhite);
  border-color: transparent;

  &:hover {
    background: var(--primaryLightColor);
    color: var(--primaryColor);
  }
`;

export const PrimaryLinkBtnSmall = styled(PrimaryLinkBtn)`
  padding: 0.25rem 0.4rem;
`;
