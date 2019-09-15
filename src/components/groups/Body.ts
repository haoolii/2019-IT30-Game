import Wrapper from '@/components/elements/Wrapper'
import WrapperContainerCenter from '@/components/elements/WrapperContainerCenter'
import Table from '@/components/groups/Table'
import * as dat from 'dat.gui'

export default class Body extends WrapperContainerCenter {
  private _table: Table
  constructor() {
    super()
    let rect = new PIXI.Graphics()
    rect.drawRect(0, 0, 1650, 900)
    rect.alpha = 0
    this._centerContainer.addContainer(rect)
    this._table = new Table()
    this._table.setPosition({animation: false}, this.width / 2 - 10, this.height / 2 + 60)
    this._table.setScale(false, 1.2, 1.2)

    const gui = new dat.GUI()
    let config = {
      countdown: () => {
        this._table.countdownStart(30)
      }
    }
    gui.add(config, 'countdown')
    this._centerContainer.addChild(this._table)
  }
}