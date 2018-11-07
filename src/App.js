import React, { Component } from 'react';
import GameCanvas from './components/GameCanvas';

class App extends Component {
  render() {
    return (
      <div className="container">
        <GameCanvas />
      </div>
    );
  }
}

export default App;
