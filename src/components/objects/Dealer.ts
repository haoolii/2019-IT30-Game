import Sprite from '@/components/elements/Sprite'
import imagePath from '@/config/imagePath'

export default class Dealer extends Sprite {
  constructor() {
    super(imagePath.tablePath, `dealer`)
  }
}