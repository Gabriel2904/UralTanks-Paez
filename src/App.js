import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Button from "@mui/material/Button";

const App = () => {
  const [counter, setCounter] = useState(10);
  const [name, setName] = useState('T34-85');

  const handlerCounterUp = () => {
    setCounter(counter + 1)
  }

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Header title="UralTanks" subtitle="subtitle" />
        <div className="Cards">
          <Cards name="Historia" subtitle="loquesea" />
          <Cards name="Actualidad" subtitle="loquesea" />
          <Cards name="Futuro" subtitle="loquesea" />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="counter">
          <p>Contador: {counter}</p>
          <Button variant="outlined">-</Button>
          <Button onClick={handlerCounterUp} variant="contained">+</Button>
          <h3>{name}</h3>
        </div>
      </header>
    </div>
  );
};

export default App;
