import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "@sncf/bootstrap-sncf.metier/dist/bootstrap-sncf.css";
import "@sncf/bootstrap-sncf.metier/dist/bootstrap-sncf.js";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button type="button" className="btn btn-primary">
          Primary
        </button>
        <p>
         <h1>Hello Sncf</h1>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
