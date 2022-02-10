import Phaser from 'phaser'

import IntroScene from './scenes/intro'

const base = {
  title: 'Snowpack Phaser Starter',
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight
}

const scale = {
  mode: Phaser.Scale.FIT,
  autoCenter: Phaser.Scale.CENTER_BOTH
}

const physics = {
  default: 'arcade',
  arcade: {
    debug: true
  }
}

const scene = [
  IntroScene
]

const plugins = {
  global: [],
  scene: []
}

const game = new Phaser.Game({
  ...base,
  scale,
  physics,
  scene,
  plugins
})
