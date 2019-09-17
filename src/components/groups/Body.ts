import Wrapper from '@/components/elements/Wrapper'
import WrapperContainerCenter from '@/components/elements/WrapperContainerCenter'
import Table from '@/components/groups/Table'
import Pokers from '@/components/groups/Pokers'
import WaitNextBetNotify from '@/components/objects/WaitNextBetNotify'
import * as dat from 'dat.gui'

export default class Body extends WrapperContainerCenter {
  private _table: Wrapper
  private _pokersPlayer: Pokers
  private _pokersBanker: Pokers
  constructor() {
    super()
    let rect = new PIXI.Graphics()
    rect.drawRect(0, 0, 1650, 900)
    rect.alpha = 0
    this._centerContainer.addContainer(rect)
    this._table = new Table()
    this._table.setPosition({ animation: false }, this.width / 2 - 10, this.height / 2 + 60)
    this._table.setScale(false, 1.2, 1.2)

    this._pokersPlayer = new Pokers()
    this._pokersPlayer.setFaipiPosition(360, -150)
    this._pokersPlayer.setPosition({ animation: false }, 500, 200)

    this._pokersBanker = new Pokers()
    this._pokersBanker.setFaipiPosition(-200, -150)
    this._pokersBanker.setPosition({ animation: false }, 1100, 200)

    let notify = new WaitNextBetNotify()
    this._centerContainer.addChild(notify)
    this._centerContainer.addChild(this._table)
    this._centerContainer.addChild(this._pokersPlayer)
    this._centerContainer.addChild(this._pokersBanker)
    notify.setPosition({ animation: false }, this.width / 2 - 80, this.height / 2)
  }
}