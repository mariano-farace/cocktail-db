import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCockTail from "./pages/SingleCockTail";
import Error from "./pages/Error";
import { AppProvider } from "./context";
import GlobalStyle from "./components/styled/Global.styled";

//TODO ver como funciona la api, para hacer mas fetch y hacer mas render! scrolling infinito
//TODO agregar un favicon
function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <AppProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/cocktail/:id" element={<SingleCockTail />} />
          <Route exact path="/*" element={<Error />} />
        </Routes>
      </AppProvider>
    </>
  );
}

export default App;
