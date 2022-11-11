import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCockTail from "./pages/SingleCockTail";
import Error from "./pages/Error";
import { AppProvider } from "./context";

//TODO hacer un refactor de app provide y para ponerlo en el index
//TODO ver como sacar el loading undefined del principio
function App() {
  return (
    <>
      <NavBar />
      <AppProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/cocktails:id" element={<SingleCockTail />} />
          <Route exact path="/*" element={<Error />} />
        </Routes>
      </AppProvider>
    </>
  );
}

export default App;
