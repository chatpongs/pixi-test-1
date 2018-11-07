import React, { Component } from 'react';
import { Application, Sprite } from 'pixi.js';

class App extends Component {
  async componentDidMount() {
    this.app = new Application({width: 800, height: 600});
    this.canvas.appendChild(this.app.view);

    const dora = Sprite.fromImage(require('./wheel.png'));
    dora.anchor.set(0.5, 0.5);
    dora.position.set(this.app.screen.width / 2, this.app.screen.height / 2);
    this.app.stage.addChild(dora);
    this.app.ticker.add((delta) => dora.rotation += delta * 0.5);
  }

  render() {
    return (
      <div ref={(r) => { this.canvas = r }} />
    );
  }
}

export default App;
