import { Sprite } from 'pixi.js';

const arrow = Sprite.fromImage('/images/arrow.png');
arrow.anchor.set(0.5);
arrow.scale.set(0.2, 0.2);

export default arrow;