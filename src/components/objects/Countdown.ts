import Sprite from '@/components/elements/Sprite'
import WrapperContainer from '@/components/elements/WrapperContainer'
import CountdownNumber from '@/components/objects/CountdownNumber'
import imagePath from '@/config/imagePath'

export default class Countdown extends Sprite {
  private wrapperContainer: WrapperContainer
  private countdownNumber: CountdownNumber
  private state: boolean = false
  constructor() {
    super(imagePath.tablePath, 'countdown')
    this.wrapperContainer = new WrapperContainer()
    this.countdownNumber = new WrapperContainer(new CountdownNumber(0))
    this.wrapperContainer.addChild(this.countdownNumber)
    this.countdownNumber.setPosition({ animation: false }, this._container.width / 2 - this.countdownNumber.width / 2, this._container.height / 2)
    this._container.addChild(this.wrapperContainer.getContainer())
  }

  public countdownStart(time: number) {
    if (this.state) return
    this.state = true
    let t = 30
    let interval = setInterval(() => {
      this.countdownNumber.removeChildren()
      this.countdownNumber.addChild(new CountdownNumber(--t))
      if (t <= 0) { 
        this.state = false
        clearInterval(interval) 
      }
    }, 1000)
  }
}