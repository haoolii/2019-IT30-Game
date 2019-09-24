import Sprite from '@/components/elements/Sprite'
import Wrapper from '@/components/elements/Wrapper'
import WrapperContainer from '@/components/elements/WrapperContainer'
import CountdownNumber from '@/components/objects/CountdownNumber'
import imagePath from '@/config/imagePath'

export default class Countdown extends Sprite {
  private wrapperContainer: WrapperContainer
  private countdownNumber: CountdownNumber
  private countdownStatus_beting: Wrapper
  private countdownStatus_paying: Wrapper
  private state: boolean = false
  private _time: number = 0
  constructor() {
    super(imagePath.tablePath, 'countdown')
    this.wrapperContainer = new WrapperContainer()
    this.countdownNumber = new WrapperContainer(new CountdownNumber(0))

    this.countdownStatus_beting = new Sprite(imagePath.tablePath, `countdownBeting`)
    this.countdownStatus_paying = new Sprite(imagePath.tablePath, `countdownPaying`)

    this.wrapperContainer.addChild(this.countdownNumber)
    this.wrapperContainer.addChild(this.countdownStatus_beting)
    this.wrapperContainer.addChild(this.countdownStatus_paying)

    this.countdownStatus_beting.setPosition({ animation: false }, this._container.width / 2 - this.countdownStatus_beting.width / 2, 15)
    this.countdownStatus_paying.setPosition({ animation: false }, this._container.width / 2 - this.countdownStatus_paying.width / 2 + 2, 20)
    this.countdownNumber.setPosition({ animation: false }, this._container.width / 2 - this.countdownNumber.width / 2, this._container.height / 2)
    this._container.addChild(this.wrapperContainer.getContainer())
    this.countdownStatus_paying.setAlpha(false, 0)
    this.countdownStatus_beting.setAlpha(false, 0)
  }

  public updateCountdown(time: number) {
    this._time = time
    this.setStatus(this._time !== 0)
    this.countdownNumber.removeChildren()
    this.countdownNumber.addChild(new CountdownNumber(time))
  }

  public setStatus(opt: boolean) {
    if (opt) {
      this.countdownStatus_paying.setAlpha(true, 0)
      this.countdownStatus_beting.setAlpha(true, 1)
    } else {
      this.countdownStatus_paying.setAlpha(true, 1)
      this.countdownStatus_beting.setAlpha(true, 0)
    }
  }
} 