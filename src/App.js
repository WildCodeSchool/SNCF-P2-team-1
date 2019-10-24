import React from "react";
import "@sncf/bootstrap-sncf.metier/dist/bootstrap-sncf.css";
import "@sncf/bootstrap-sncf.metier/dist/bootstrap-sncf.js";
import NavBar from "./components/Header/Navbar/NavBar";
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
