import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: var(--mainBlack);
  background: var(--mainBackground);
  line-height: 1.4;
  font-size: 1rem;
  font-weight: 300;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--slantedFont);
  margin-bottom: 1.25rem;
  letter-spacing: var(--mainSpacing);
}
p {
  margin-bottom: 1.25rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: var(--mainBlack);
}
img {
  width: 100%;
  display: block;
}
`;

export default GlobalStyle;
