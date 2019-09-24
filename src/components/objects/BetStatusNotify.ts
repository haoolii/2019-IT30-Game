import Sprite from '@/components/elements/Sprite'
import imagePath from '@/config/imagePath'
import Wrapper from '@/components/elements/Wrapper'
import WrapperContainerCenter from '@/components/elements/WrapperContainerCenter'

export default class BetStatusNotify extends WrapperContainerCenter {
  private _bg: Wrapper
  private _start: Wrapper
  private _end: Wrapper
  private _config_Time: number = 2000
  private _status: boolean
  constructor() {
    super()
    this._bg = new WrapperContainerCenter()
    this._start = new WrapperContainerCenter()
    this._end = new WrapperContainerCenter()
    this._status = true

    this._bg.addChild(new Sprite(imagePath.tablePath, 'startendbet'))
    this._start.addChild(new Sprite(imagePath.tablePath, 'startbet'))
    this._end.addChild(new Sprite(imagePath.tablePath, 'endbet'))

    this._centerContainer.addChild(this._bg)
    this._centerContainer.addChild(this._start)
    this._centerContainer.addChild(this._end)

    this._bg.setPosition({ animation: false }, 0, 0)
    this._start.setPosition({ animation: false }, this._container.width / 2 - this._start.width / 2, this._container.height / 2 - this._start.height / 2)
    this._end.setPosition({ animation: false }, this._container.width / 2 - this._end.width / 2, this._container.height / 2 - this._end.height / 2)

    this.reset(false)
  }

  public betNotifyStart() {
    if (this._status) {
      this._bg.setAlpha(true, 1)
      this._bg.setScale(true, 1, 1)

      this._start.setAlpha(true, 1)
      this._start.setScale(true, 1, 1)
      setTimeout(() => {
        this.reset(true)
        setTimeout(() => { this._status = true }, 600)
      }, this._config_Time)
    }
    this._status = false
  }

  public betNotifyEnd() {
    if (this._status) {
      this._bg.setAlpha(true, 1)
      this._bg.setScale(true, 1, 1)

      this._end.setAlpha(true, 1)
      this._end.setScale(true, 1, 1)
      setTimeout(() => {
        this.reset(true)
        setTimeout(() => { this._status = true }, 600)
      }, this._config_Time)
    }
    this._status = false
  }

  public reset(opt: boolean) {
    this._bg.setAlpha(opt, 0)
    this._bg.setScale(opt, 1.5, 1.5)

    this._start.setAlpha(opt, 0)
    this._start.setScale(opt, 1.2, 1.2)

    this._end.setAlpha(opt, 0)
    this._end.setScale(opt, 1.2, 1.2)
  }
}