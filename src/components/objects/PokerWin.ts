import WrapperContainerCenter from '@/components/elements/WrapperContainerCenter'
import Sprite from '@/components/elements/Sprite'
import Wrapper from '@/components/elements/Wrapper'
import imagePath from '@/config/imagePath'

export default class PokerWin extends WrapperContainerCenter {
  private _bgCircle: Wrapper
  private _flag: Wrapper
  private _font: Wrapper
  private _star: Wrapper
  private _opt: boolean = false

  constructor() {
    super()
    this._bgCircle = new WrapperContainerCenter()
    this._flag = new WrapperContainerCenter()
    this._font = new WrapperContainerCenter()
    this._star = new WrapperContainerCenter()

    this._bgCircle.addContainer(new Sprite(imagePath.winnerPath, 'bgcircle').getContainer())
    this._flag.addContainer(new Sprite(imagePath.winnerPath, 'flag').getContainer())
    this._font.addContainer(new Sprite(imagePath.winnerPath, 'font').getContainer())
    this._star.addContainer(new Sprite(imagePath.winnerPath, 'star').getContainer())

    this.addChild(this._bgCircle)
    this.addChild(this._flag)
    this.addChild(this._font)
    this.addChild(this._star)

    this._bgCircle.setPosition({ animation: false }, this._centerContainer.width / 2 - this._bgCircle.width / 2, 0)
    this._flag.setPosition({ animation: false }, this._centerContainer.width / 2 - this._flag.width / 2, this._centerContainer.height - 110)
    this._font.setPosition({ animation: false }, this._centerContainer.width / 2 - this._font.width / 2, this._centerContainer.height - 140)
    this._star.setPosition({ animation: false }, this._centerContainer.width / 2 - this._star.width / 2 - 25, this._centerContainer.height - 125)

    this._opt = true
    this.rotateCircle()
  }

  public removeChildren() {
    super.removeChildren()
    this._opt = false
  }

  private rotateCircle() {
    let r = Math.PI * 0
    let test = () => {
      if (this._opt) {
        window.requestAnimationFrame(() => {
          r += Math.PI * 0.005
          this._bgCircle.setRotation(false, r)
          if (this) {
            test()
          }
        })
      }
    }
    test()
  }
}