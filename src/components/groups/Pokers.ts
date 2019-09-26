import WrapperContainerCenter from '@/components/elements/WrapperContainerCenter'
import Wrapper from '@/components/elements/Wrapper'
import Poker from '@/components/objects/Poker'
import PokerResult from '@/components/objects/PokerResult'
import PokerPoint from '@/components/objects/PokerPoint'
import PokerWin from '@/components/objects/PokerWin'
import * as dat from 'dat.gui'

export default class Pokers extends WrapperContainerCenter {
  private _pokersWrapper: Wrapper
  private _pokerPointWrapper: Wrapper
  private _pokerPoint: PokerPoint
  private _pokerWinWrapper: Wrapper
  private _pokerWin: PokerWin
  private _pokerResultWrapper: Wrapper
  private _faiPiPos = {
    x: 0,
    y: 0
  }

  private _pokerList: Array<Poker> = []
  constructor() {
    super()
    this._pokersWrapper = new WrapperContainerCenter()
    this._pokerPointWrapper = new WrapperContainerCenter()
    this._pokerWinWrapper = new WrapperContainerCenter()
    this._pokerResultWrapper = new WrapperContainerCenter()
    this._pokerWin = new PokerWin()
    this._pokerPoint = new PokerPoint(0)

    // setTimeout(() => {
    //   setTimeout(() => {
    //     this.addPoker(new Poker('Plum', 'A'))
    //   }, 0)
    //   setTimeout(() => {
    //     this.addPoker(new Poker('Plum', 'A'))
    //   }, 500)
    //   setTimeout(() => {
    //     this.addPoker(new Poker('Plum', 'A'))
    //   }, 1000)
    //   setTimeout(() => {
    //     this.displayPokerPoint()
    //     this.displayWin()
    //     this.displayResult()
    //   }, 3000);
    // }, 800)

    this.addChild(this._pokersWrapper)
    this.addChild(this._pokerPointWrapper)
    this.addChild(this._pokerWinWrapper)
    this.addChild(this._pokerResultWrapper)
    this._pokersWrapper.setPosition({ animation: false }, 0, 150)
  }

  public addPoker(poker: Poker) {
    this.animationPoker(poker)
    this._pokerList.push(poker)
    this._pokersWrapper.addChild(poker)
    setTimeout(() => {
      poker.fanPoker()
    }, 800)
    this.adjustPokers()
  }

  private adjustPokers() {
    for (let index in this._pokerList) {
      this._pokerList[index].setPosition({ animation: true }, -40 * Number(this._pokerList.length - Number(index) - 1), 0)
    }
  }

  public animationPoker(poker: Poker) {
    poker.setScale(false, 0.1, 0.1)
    poker.setScale(true, 1, 1)
    poker.setRotation(false, Math.PI)
    poker.setRotation(true, 0)
    poker.setPosition({ animation: false }, this._faiPiPos.x, this._faiPiPos.y)
    poker.setPosition({ animation: true }, 0, 0)
  }

  public displayPokerPoint() {
    this._pokerPointWrapper.removeChildren()
    let score = 0
    for (let poker of this._pokerList) {
      score += poker.getPoint()
    }

    let pos: any = {
      '1': {
        x: 25,
        y: 310
      },
      '2': {
        x: 10,
        y: 310
      },
      '3': {
        x: -10,
        y: 310
      }
    }
    score = score % 10
    this._pokerPoint = new PokerPoint(score)
    this._pokerPointWrapper.addChild(this._pokerPoint)
    this._pokerPoint.setPosition({ animation: false }, pos[this._pokerList.length].x, pos[this._pokerList.length].y)
  }

  public displayResult() {
    this._pokerResultWrapper.removeChildren()
    let pos: any = {
      '1': {
        x: 35,
        y: 220
      },
      '2': {
        x: 20,
        y: 230
      },
      '3': {
        x: 0,
        y: 230
      }
    }
    this._pokerResultWrapper.addChild(new PokerResult('tiepair'))
    this._pokerResultWrapper.setPosition({ animation: false }, pos[this._pokerList.length].x, pos[this._pokerList.length].y)
  }

  public displayWin() {
    this._pokerWinWrapper.addChild(this._pokerWin)

    let pos: any = {
      '1': {
        x: -40,
        y: 0
      },
      '2': {
        x: -60,
        y: 0
      },
      '3': {
        x: -80,
        y: 0
      }
    }
    this._pokerWin.setPosition({ animation: false }, pos[this._pokerList.length].x, pos[this._pokerList.length].y)
  }

  public setFaipiPosition(x: number, y: number) {
    this._faiPiPos.x = x
    this._faiPiPos.y = y
  }

  public removeChildren() {
    super.removeChildren()
    this._pokerWin.removeChildren()
    this._pokerPoint.removeChildren()
    this._pokerList.map(e => {
      e.removeChildren()
    })
  }
}