import Wrapper from '@/components/elements/Wrapper'
import WrapperContainerCenter from '@/components/elements/WrapperContainerCenter'
import Table from '@/components/groups/Table'
import Pokers from '@/components/groups/Pokers'
import WaitNextBetNotify from '@/components/objects/WaitNextBetNotify'
import BetStatusNotify from '@/components/objects/BetStatusNotify'
import ChipsLayer from '@/components/groups/ChipsLayer'
import $io from '@/services/$io'
import { store, actions } from '@/store/index'
import { plusBet, calcBetTotal } from '@/utils/tools'
import cmd from '@/cmd'
import cst from '@/cst'
import * as dat from 'dat.gui'

export default class Body extends WrapperContainerCenter {
  private _table: Table
  private _pokersPlayer: Pokers
  private _pokersBanker: Pokers
  private _chipsLayer: ChipsLayer
  private _betStatusntf: BetStatusNotify
  private _waitNextBetNotify: WaitNextBetNotify
  constructor() {
    super()
    let rect = new PIXI.Graphics()
    rect.drawRect(0, 0, 1650, 900)
    rect.alpha = 0
    this._centerContainer.addContainer(rect)
    this._table = new Table()
    this._table.setPosition(
      { animation: false },
      this.width / 2 - 10,
      this.height / 2 + 60
    )
    this._table.setScale(false, 1.2, 1.2)

    this._betStatusntf = new BetStatusNotify()
    this._betStatusntf.setPosition(
      { animation: false },
      this.width / 2 - 270,
      this.height / 2 - 80
    )

    this._pokersPlayer = new Pokers()
    this._pokersPlayer.setFaipiPosition(360, -150)
    this._pokersPlayer.setPosition({ animation: false }, 500, 200)

    this._pokersBanker = new Pokers()
    this._pokersBanker.setFaipiPosition(-200, -150)
    this._pokersBanker.setPosition({ animation: false }, 1100, 200)

    this._chipsLayer = new ChipsLayer()

    this._waitNextBetNotify = new WaitNextBetNotify()
    this._centerContainer.addChild(this._table)
    this._centerContainer.addChild(this._chipsLayer)
    this._centerContainer.addChild(this._pokersPlayer)
    this._centerContainer.addChild(this._pokersBanker)
    this._centerContainer.addChild(this._betStatusntf)
    this._centerContainer.addChild(this._waitNextBetNotify)

    this._waitNextBetNotify.setPosition(
      { animation: false },
      this.width / 2 - 80,
      this.height / 2
    )

    this.initIO()
    this.initChips()
  }

  public initChips() {
    // 初始化時同步自己已下注的籌碼 直接模擬下注
    $io.REQ_USER_BET_INFO().then((data: any) => {
      let _betChip = store.getState().betChip
      store.dispatch(
        actions.updateBetChip({ betChip: plusBet(_betChip, data.bet) })
      )
      this._chipsLayer.addBetChip('bcr', 'users', data.bet)
    })
  }

  public initIO() {
    $io.on(cmd.MSG_TB_NTF, (reason: any, data: any) => {
      switch (reason) {
        case cst.TB_NTF_COUNTDOWN_START:
          this._betStatusntf.betNotifyStart()
          this._waitNextBetNotify.setAlpha(true, 0)
          setTimeout(() => this._waitNextBetNotify.removeChildren, 1000)
          break
        case cst.TB_NTF_COUNTDOWN_STOP:
          this._betStatusntf.betNotifyEnd()
          break
        case cst.TB_NTF_PI_RESULT:
          store.dispatch(actions.updateBetChip({
            betChip: {
              banker: 0,
              player: 0,
              bankerking: 0,
              playerking: 0,
              tie: 0,
              tiepair: 0,
              bpair: 0,
              ppair: 0
            }
          }))
          this._chipsLayer.clearLayer()
          break
      }
    })

    $io.on(cmd.MSG_BT_NTF, (reason: any, data: any) => {
      switch (reason) {
        case cst.BT_NTF_BETOUT:
          this.betout(data)
          break
        case cst.BT_NTF_BETOUT_BALANCE:
          store.dispatch(actions.updateBalance({ balance: data.balance }))
          break
      }
    })

    $io.on(cmd.MSG_USER_NTF, (reason: any, data: any) => {
      switch (reason) {
        case cst.USER_NTF_INFO:
          this.userInfo(data)
          break
      }
    })
  }

  public betout(data: any) {
    let _betChip = store.getState().betChip
    store.dispatch(
      actions.updateBetChip({ betChip: plusBet(_betChip, data.bet) })
    )
    this._chipsLayer.addBetChip('user', 'users', data.bet)
  }

  public userInfo(data: any) {
    store.dispatch(actions.updateBalance({ balance: data.balance }))
  }
}
