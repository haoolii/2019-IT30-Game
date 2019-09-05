import loadingPath from '@/config/loadingPath'
import Wrapper from '@/components/elements/Wrapper'
import Texture from '@/components/elements/Texture'
import WrapperContainerCenter from '@/components/elements/WrapperContainerCenter'
import * as PIXI from "pixi.js"

export default class Loading extends WrapperContainerCenter {
  private _loadingText: Wrapper
  private _loadLogo: Wrapper
  private _loadBg: Wrapper
  private _status: boolean = false

  constructor() {
    super()
    let rect = new PIXI.Graphics()
    rect.beginFill(0xff0000)
    rect.drawRect(0, 0, 1650, 900)
    rect.endFill()
    rect.alpha = 0
    this._centerContainer.addContainer(rect)

    this._loadingText = new WrapperContainerCenter()
    this._loadLogo = new WrapperContainerCenter()
    this._loadBg = new WrapperContainerCenter()

    this._centerContainer.addChild(this._loadBg)
    this._loadBg.addChild(new Texture(loadingPath.bg))
    this._loadBg.setSize(false, 1950, 900)
    this._loadBg.setAlpha(false, 0)
    this._loadBg.setAlpha(true, 1)
    this._loadBg.setPosition({ animation: false }, -162.5, 0)

    this._centerContainer.addChild(this._loadLogo)
    this._loadLogo.addChild(new Texture(loadingPath.logo))
    this._loadLogo.setAlpha(false, 0)
    this._loadLogo.setAlpha(true, 1)
    this._loadLogo.setPosition({ animation: false }, 1650 / 2 - this._loadLogo.width / 2, 900 / 2 - this._loadLogo.width / 2)

    this._centerContainer.addChild(this._loadingText)
    this._loadingText.setPosition({ animation: false }, 1650 / 2 - this._loadingText.width / 2, 900 - 200)

    this.animation()
  }

  public done(delay?: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this._status = true
        this._loadLogo.setScale(true, 2, 2)
        this._loadLogo.setAlpha(true, 0)
        setTimeout(() => {
          resolve()
        }, 0)
      }, delay ? delay : 0)
    })
  }

  public update(process: number) {
    this._loadingText.removeChildren()
    this._loadingText.addContainer(new PIXI.Text(`Loading: ${process} %`, { fontFamily: 'Arial', fontSize: 24, fill: 0xff1010, align: 'center' }))
    this._loadingText.setPosition({ animation: false }, 1650 / 2 - this._loadingText.width / 2, 900 - 200)
  }

  private animation() {
    let _reverse = false
    let timeout = setInterval(() => {
      _reverse ? this._loadLogo.setPosition({ animation: true, during: 3 }, this._loadLogo.x, this._loadLogo.y - 50) : this._loadLogo.setPosition({ animation: true, during: 3 }, this._loadLogo.x, this._loadLogo.y + 50)
      _reverse = !_reverse
      if (this._status) { clearInterval(timeout) }
    }, 700)
  }
}