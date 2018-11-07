import React from 'react';
import { Application, Sprite } from 'pixi.js';

import arrow from '../sprites/arrow';

class GameCanvas extends React.Component {
  logicalWidth = 600;
  logicalHeight = 600;

  state = {
    done: false,
  }
  componentDidMount() {
    this.app = new Application({ width: this.logicalWidth, height: this.logicalHeight, transparent: true });
    // add canvas to the container
    this.container.appendChild(this.app.view);
    // setup the spin wheel
    const wheel = Sprite.fromImage('images/wheel.png');
    let speed = 0.5;
    wheel.anchor.set(0.5, 0.5);
    wheel.position.set(this.app.screen.width / 2, this.app.screen.height / 2);
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
    // setup the arrow
    arrow.position.set(this.app.screen.width / 2, 40);
    // add objects to the stage
    this.app.stage.addChild(wheel);
    this.app.stage.addChild(arrow);
    // setup animations
    this.app.ticker.add((delta) => wheel.rotation += delta * speed);
    // resize handler
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize);
  }
  handleResize = () => {
    const scaleFactor = this.container.clientWidth / this.logicalWidth;
    this.app.renderer.resize(this.container.clientWidth, this.container.clientHeight);
    this.app.stage.scale.set(scaleFactor);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="embed-responsive embed-responsive-1by1">
            <div className="embed-responsive-item" ref={(r) => { this.container = r }} />
          </div>
        </div>
        <div className="col-md-6">
          {this.state.done && <div>You got a reward!</div>}
        </div>
      </div>
    );
  }
}

export default GameCanvas;