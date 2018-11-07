import React, { Component } from 'react';
import { Application, Sprite } from 'pixi.js';

import dora from './sprites/dora';

class App extends Component {
  state = {
    done: false,
  }
  componentDidMount() {
    this.app = new Application({ width: 800, height: 600, transparent: true });
    this.canvas.appendChild(this.app.view);

    const wheel = Sprite.fromImage('images/wheel.png');
    let speed = 0.5;
    wheel.anchor.set(0.5, 0.5);
    wheel.position.set(this.app.screen.width / 2, this.app.screen.height / 2);
    this.app.stage.addChild(wheel);
    this.app.stage.addChild(dora);
    dora.position.set(this.app.screen.width / 2, 10);

    this.app.ticker.add((delta) => wheel.rotation += delta * speed);
    wheel.interactive = true;
    wheel.buttonMode = true;
    wheel.on('pointerdown', () => {
      const handler = setInterval(() => {
        if (speed > 0) {
          speed -= 0.01;
        }
        else {
          clearInterval(handler);
          this.setState({ done: true });
        }
      }, 100);
    });
  }

  render() {
    return (
      <div>
        <div ref={(r) => { this.canvas = r }} />
        {this.state.done && <div>You got a reward!</div>}
      </div>
    );
  }
}

export default App;
