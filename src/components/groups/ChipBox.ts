import WrapperContainerCenter from '@/components/elements/WrapperContainerCenter'
import chipType from '@/config/chipType'
import Chip from '@/components/objects/Chip'
import * as WrapperType from '@/components/elements/WrapperType'

export default class ChipBox extends WrapperContainerCenter {
  private _chipList: Array<Chip> = []
  constructor() {
    super()
    for (let v in chipType) {
      let chip = new Chip(v as keyof typeof chipType)
      this.addChild(chip)
      this._chipList.push(chip)
    }
    for (let i in this._chipList) {
      this._chipList[i].setPosition({ animation: false }, Number(i) * this._chipList[i].width * 1.05, 0)
      this._chipList[i].setInteractive(true)
    }
  }

  public setPosition(animationOpt: WrapperType.animationOpt, x: number, y: number): void {
    this.updateCenter()
    this._centerContainer.setPosition(animationOpt, x, y)
  }
}