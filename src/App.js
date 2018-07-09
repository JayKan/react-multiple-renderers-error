import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const AppContext = React.createContext({
  level: null,
  maxLevel: null,
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 1,
      maxLevel: 20,
    };
  }
  renderContent() {
    return (
      <AppContext.Consumer>
        {({ level }) =>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React Level: {level}</h1>
            </header>
          </div>
        }
      </AppContext.Consumer>
    );
  }
  getValue = () => ({
    level: this.state.level,
    maxLevel: this.state.maxLevel
  });

  render() {
    return (
      <AppContext.Provider value={this.getValue()}>
        {this.renderContent()}
      </AppContext.Provider>
    );
  }
}

export default App;
