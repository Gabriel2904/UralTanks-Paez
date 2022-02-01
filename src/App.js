import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Button from '@mui/material/Button';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 66,
      name: "t34",
    };

    //Binding
    //this.handlerCounterUp = this.handlerCounterUp.bind(this);
  }

  handlerCounterUp = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  handlerCounterDown = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  handlerCounterUpdateName = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  //handlerCounterUp() {
  //this.setState({counter: this.state.counter + 1})
  //}

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header title="title" subtitle="subtitle" />
        <div className="Cards">
          <Cards name="Historia" subtitle="loquesea" />
          <Cards name="Actualidad" subtitle="loquesea" />
          <Cards name="Futuro" subtitle="loquesea" />
        </div>
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
        <div className="CounterSection">
          <p>Counter: {this.state.counter}</p>
          <div className="btn.section">
            <Button variant="contained" onClick={this.handlerCounterUp}>+</Button>
            <Button variant="contained" onClick={this.handlerCounterDown}>-</Button>
            
          </div>
          <h3>{this.state.name}</h3>
        </div>
      </div>
    );
  }
}

export default App;
