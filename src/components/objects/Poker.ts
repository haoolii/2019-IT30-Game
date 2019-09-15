import WrapperContainerCenter from '@/components/elements/WrapperContainerCenter'
import WrapperContainer from '@/components/elements/WrapperContainer'
import Sprite from '@/components/elements/Sprite'
import Animation from '@/components/elements/Animation'
import Wrapper from '@/components/elements/Wrapper'
import pokerType from '@/config/pokerType'
import pokerPoint from '@/config/pokerPoint'
import imagePath from '@/config/imagePath'

export default class Poker extends WrapperContainerCenter {
  private _front: Wrapper
  private _back: Wrapper
  private _fanPoker: Wrapper
  private _pokerType: string
  private _pokerColor: string
  private _pokerValue: string
  private _pokerPoint: number
  private _status: boolean = false

  constructor(pokerConfig: keyof typeof pokerType, value: string, config?: any) {
    super()
    this._pokerType = pokerType[pokerConfig].type
    this._pokerColor = pokerType[pokerConfig].color
    this._pokerValue = value
    this._pokerPoint = pokerPoint[value]

    this._front = new WrapperContainerCenter()
    this._back = new WrapperContainer()
    this._fanPoker = new WrapperContainer()

    this._front.addContainer(new Sprite(imagePath.pokerPath, 'front').getContainer())
    this._back.addContainer(new Sprite(imagePath.pokerPath, 'back').getContainer())

    this.addChild(this._front)
    this.addChild(this._back)
    this.addChild(this._fanPoker)

    this.drawNumIcon()
    if (['J', 'Q', 'K'].includes(this._pokerValue)) { this.drawJQKIcon() }
  }
  public getPoint(): number {
    return this._pokerPoint
  }
  public fanPoker(): void {
    this._status = !this._status
    this._back.setAlpha(false, 0)
    let fanPoker = new Animation(imagePath.fanpaiPath, 'fanpai')
    this._fanPoker.addContainer(fanPoker.getContainer())
    this._fanPoker.setPosition({ animation: false }, -this._fanPoker.width / 5, 0)
    let _icon = new WrapperContainer().addContainer(new Sprite(imagePath.pokerPath, `${this._pokerColor}${this._pokerType}`).getContainer())
    let _num = new WrapperContainer().addContainer(new Sprite(imagePath.pokerPath, `${this._pokerColor}${this._pokerValue}`).getContainer())
    _icon.setAlpha(false, 0)
    _num.setAlpha(false, 0)
    this._fanPoker.addChild(_icon)
    this._fanPoker.addChild(_num)

    fanPoker.getAnimatedSprite().onFrameChange = (f: any) => {
      if (f === 7) {
        _icon.setAlpha(false, 1)
        _num.setAlpha(false, 1)
        _icon.setPosition({ animation: false }, 125, 40)
        _icon.setRotation(false, 0.91)
        _icon.setScale(false, 0.4, 0.4)
        _num.setPosition({ animation: false }, 145, 27)
        _num.setRotation(false, 0.91)
        _num.setScale(false, 0.4, 0.4)
      }
    }

    fanPoker.play()

    this._front.setScale(false, 1.3, 1.3)
    this._front.setRotation(false, Math.PI * -0.25)
    this._front.setAlpha(false, 0)

    fanPoker.getAnimatedSprite().onComplete = () => {
      this._fanPoker.setAlpha(false, 0)
      this._front.setScale(true, 1, 1)
      this._front.setRotation(true, 0)
      this._front.setAlpha(false, 1)
    }
  }

  private drawNumIcon(): void {
    let flowerBase = {
      x: 10,
      y: 40,
      scale: 0.6
    }

    let numBase = {
      x: 10,
      y: 10,
      scale: 0.6
    }
    // 正向圖案
    let flower = new WrapperContainer()
    flower.addContainer(new Sprite(imagePath.pokerPath, `${this._pokerColor}${this._pokerType}`).getContainer())
    flower.setScale(false, flowerBase.scale, flowerBase.scale)
    flower.setPosition({ animation: false }, flowerBase.x, flowerBase.y)
    this._front.addChild(flower)

    // 反向圖案
    let anti_flower = new WrapperContainer()
    anti_flower.addContainer(new Sprite(imagePath.pokerPath, `${this._pokerColor}${this._pokerType}`).getContainer())
    anti_flower.setScale(false, flowerBase.scale, flowerBase.scale)
    anti_flower.setRotation(false, Math.PI)
    anti_flower.setPosition({ animation: false }, this._front.width - flowerBase.x, this._front.height - flowerBase.y)
    this._front.addChild(anti_flower)

    // 正向數字
    let num = new WrapperContainer()
    num.addContainer(new Sprite(imagePath.pokerPath, `${this._pokerColor}${this._pokerValue}`).getContainer())
    num.setScale(false, numBase.scale, numBase.scale)
    num.setPosition({ animation: false }, numBase.x, numBase.y)
    this._front.addChild(num)

    // 反向數字
    let anti_num = new WrapperContainer()
    anti_num.addContainer(new Sprite(imagePath.pokerPath, `${this._pokerColor}${this._pokerValue}`).getContainer())
    anti_num.setScale(false, numBase.scale, numBase.scale)
    anti_num.setRotation(false, Math.PI)
    anti_num.setPosition({ animation: false }, this._front.width - numBase.x, this._front.height - numBase.y)
    this._front.addChild(anti_num)
  }

  private drawJQKIcon(): void {
    let iconBase = {
      x: 25,
      y: 18,
      scale: 0.8,
      padding: 8
    }
    // 圖案
    let icon = new WrapperContainer()
    icon.addContainer(new Sprite(imagePath.pokerPath, `${this._pokerColor}King`).getContainer())
    icon.setScale(false, iconBase.scale, iconBase.scale)
    icon.setPosition({ animation: false }, iconBase.x, iconBase.y)
    let maskGraphic = new PIXI.Graphics()
    maskGraphic.beginFill(0xff0000)
    maskGraphic.drawRect(iconBase.padding, iconBase.padding, this._front.width - iconBase.padding * 2, this._front.height - iconBase.padding * 2)
    maskGraphic.endFill()
    icon.getContainer().mask = maskGraphic
    this._front.addContainer(maskGraphic)
    this._front.addChild(icon)
  }

  get x(): number {
    return this._front.getContainer().x;
  }
  set x(num: number) {
    this._front.getContainer().x = num
  }

  get y(): number {
    return this._front.getContainer().y;
  }
  set y(num: number) {
    this._front.getContainer().y = num
  }

  get width(): number {
    return this._front.getContainer().width;
  }
  set width(num: number) {
    this._front.getContainer().width = num
  }
  get height(): number {
    return this._front.getContainer().height;
  }
  set height(num: number) {
    this._front.getContainer().height = num
  }
}