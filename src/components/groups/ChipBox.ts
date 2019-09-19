import WrapperContainerCenter from '@/components/elements/WrapperContainerCenter'
import chipType from '@/config/chipType'
import Chip from '@/components/objects/Chip'
import * as WrapperType from '@/components/elements/WrapperType'
import { store, actions } from '@/store/index'
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
      this.hookChip(this._chipList[i])
    }
  }

  public hookChip(chip: Chip) {
    chip.setInteractive(true)
    chip.onClick(() => {
      store.dispatch(actions.updateChip({ chip: chip.value }))
    })

    let _update = () => {
      let state = store.getState()
      if (state.chip === chip.value) {
        chip.setPosition({ animation: true }, chip.x, -30)
      } else {
        chip.setPosition({ animation: true }, chip.x, 0)
      }
    }
    store.subscribe(_update)
    _update()
  }

  public setPosition(animationOpt: WrapperType.animationOpt, x: number, y: number): void {
    this.updateCenter()
    this._centerContainer.setPosition(animationOpt, x, y)
  }
}