import WrapperContainerCenter from '@/components/elements/WrapperContainerCenter'
import Info from '@/components/objects/Info'
import Wrapper from '@/components/elements/Wrapper'
import ChipBox from '@/components/groups/ChipBox'

export default class Navbottom extends WrapperContainerCenter {
  private _chipBox: Wrapper
  private _Info: Wrapper

  constructor() {
    super()
    let rect = new PIXI.Graphics()
    rect.drawRect(0, 0, 1650, 180)
    rect.alpha = 0
    this._centerContainer.addContainer(rect)

    this.setPosition({ animation: false }, 0, 720)

    // Info
    this._Info = new Info()
    this._Info.setPosition({ animation: false }, 50, 20)
    this._Info.setScale(false, 1.2, 1.2)
    this.addChild(this._Info)

    // ChipBox
    this._chipBox = new ChipBox()
    this._chipBox.setPosition({ animation: false }, this.width / 2, this.height / 2)
    this._chipBox.setScale(false, 1.2, 1.2)
    this.addChild(this._chipBox)
  }
}