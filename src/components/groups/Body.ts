import Wrapper from '@/components/elements/Wrapper'
import WrapperContainerCenter from '@/components/elements/WrapperContainerCenter'
import Table from '@/components/groups/Table'
import Poker from '@/components/objects/Poker'
import WaitNextBetNotify from '@/components/objects/WaitNextBetNotify'
export default class Body extends WrapperContainerCenter {
  private _table: Wrapper

  constructor() {
    super()
    let rect = new PIXI.Graphics()
    rect.drawRect(0, 0, 1650, 900)
    rect.alpha = 0
    this._centerContainer.addContainer(rect)
    this._table = new Table()
    this._table.setPosition({ animation: false }, this.width / 2 - 10, this.height / 2 + 60)
    this._table.setScale(false, 1.2, 1.2)

    let notify = new WaitNextBetNotify()
    this._centerContainer.addChild(this._table)
    this._centerContainer.addChild(notify)
    notify.setPosition({ animation: false }, this.width / 2 - 80, this.height / 2)
  }
}