import Sprite from '@/components/elements/Sprite'
import imagePath from '@/config/imagePath'

export default class PokerResult extends Sprite {
  constructor(result: string) {
    super(imagePath.winnerPath, result)
    this.setPosition({ animation: false }, - this.width / 2 + 20, 0)
  }
}