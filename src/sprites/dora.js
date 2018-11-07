import { Sprite } from 'pixi.js';

const dora = Sprite.fromImage('/images/dora.png');
dora.anchor.set(0.5);
dora.scale.set(0.1, 0.1);

export default dora;