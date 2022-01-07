import Phaser from 'phaser'

export default class IntroScene extends Phaser.Scene {
  preload () {
    this.load.pack('resources', './assets/resources.json')
  }

  create () {
    this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'phaser')
  }
}
