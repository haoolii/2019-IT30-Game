import Sprite from '@/components/elements/Sprite'
import imagePath from '@/config/imagePath'

export default class PokerPoint extends Sprite {
  constructor(point: number) {
    super(imagePath.tablePath, `score${point}`)
  }
}