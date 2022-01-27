import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header title='title' subtitle='subtitle'/>
        <Cards name='Historia' description='loquesea' />
        <Cards name='Actualidad' description='loquesea'/>
        <Cards name='Futuro' description='loquesea'/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
