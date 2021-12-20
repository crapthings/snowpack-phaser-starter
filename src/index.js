import Phaser from 'phaser'

import IntroScene from './scenes/intro'

const game = new Phaser.Game({
  title: '',
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  scene: [
    IntroScene
  ]
})
