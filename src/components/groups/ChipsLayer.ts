import WrapperContainerCenter from '@/components/elements/WrapperContainerCenter'
import Wrapper from '@/components/elements/Wrapper'
import Chip from '@/components/objects/Chip'
import tableChips from '@/config/tableChips'
import chipType from '@/config/chipType'
import tableChipsPosition from '@/config/tableChipsPosition'
import { getRandom } from '@/utils/tools'
import dat from 'dat.gui'

interface layerType {
  strangers: Array<Chip>
  users: Array<Chip>
}

interface betType {
  banker: Number
  player: Number
  bankerking: Number
  playerking: Number
  tie: Number
  tiepair: Number
  bpair: Number
  ppair: Number
}
export default class ChipsLayer extends WrapperContainerCenter {
  private _layer: Wrapper
  private _playerpair: layerType = { strangers: [], users: [] }
  private _playerking: layerType = { strangers: [], users: [] }
  private _tiepair: layerType = { strangers: [], users: [] }
  private _tie: layerType = { strangers: [], users: [] }
  private _bankerking: layerType = { strangers: [], users: [] }
  private _banker: layerType = { strangers: [], users: [] }
  private _bankerpair: layerType = { strangers: [], users: [] }
  private _player: layerType = { strangers: [], users: [] }

  constructor() {
    super()
    this._layer = new WrapperContainerCenter()

    this.addChild(this._layer)

    let config = {
      addStrangerChip: () => {
        this.addStrangerChip('player', '1000000')
      },
      addUserChip: () => {
        this.addUserChip('player', '1000000')
      },
      bcrUserChip: () => {
        this.bcrUserChip('player', '1000000')
      },
      bcrStrangerChip: () => {
        this.bcrStrangerChip('player', '1000000')
      },
      bcrGrab: () => {
        this.grab('stranger', 'users', 'player')
      },
      bcrTotal: () => {
        this.bcrTotal('bcr', 'users', 'player', 123123)
      },
      reset: () => {
        this.clearLayer()
      }
    }
  }
  public addBetChip(
    pos: keyof typeof tableChipsPosition,
    role: keyof layerType,
    bet: betType
  ) {
    for (let b in bet) {
      switch (b){
        case 'banker':
          this.bcrTotal(pos, role, b, Number(bet[b]))
          break
        case 'player':
          this.bcrTotal(pos, role, b, Number(bet[b]))
          break
        case 'bankerking':
          this.bcrTotal(pos, role, b, Number(bet[b]))
          break
        case 'playerking':
          this.bcrTotal(pos, role, b, Number(bet[b]))
          break
        case 'tie':
          this.bcrTotal(pos, role, b, Number(bet[b]))
          break
        case 'tiepair':
          this.bcrTotal(pos, role, b, Number(bet[b]))
          break
        case 'bpair':
          this.bcrTotal(pos, role, b, Number(bet[b]))
          break
        case 'ppair':
          this.bcrTotal(pos, role, b, Number(bet[b]))
          break
      }
    }
  }

  public bcrTotal(
    pos: keyof typeof tableChipsPosition,
    role: keyof layerType,
    type: keyof typeof tableChips,
    total: number
  ) {
    let a = Math.floor(total / 10000000)
    total -= a * 10000000
    let b = Math.floor(total / 5000000)
    total -= b * 5000000
    let c = Math.floor(total / 1000000)
    total -= c * 1000000
    let d = Math.floor(total / 100000)
    total -= d * 100000
    let e = Math.floor(total / 10000)
    total -= e * 10000
    let f = Math.floor(total / 1000)
    total -= f * 1000
    while (a > 0) {
      this.sendChip(pos, role, type, '10000000')
      a--
    }
    while (b > 0) {
      this.sendChip(pos, role, type, '5000000')
      b--
    }
    while (c > 0) {
      this.sendChip(pos, role, type, '1000000')
      c--
    }
    while (d > 0) {
      this.sendChip(pos, role, type, '100000')
      d--
    }
    while (e > 0) {
      this.sendChip(pos, role, type, '10000')
      e--
    }
    while (f > 0) {
      this.sendChip(pos, role, type, '1000')
      f--
    }
  }

  public bcrStangerTotal(type: keyof typeof tableChips, total: number) {}

  public bcrUserChip(
    type: keyof typeof tableChips,
    chiptype: keyof typeof chipType
  ) {
    this.sendChip('bcr', 'users', type, chiptype)
  }

  public bcrStrangerChip(
    type: keyof typeof tableChips,
    chiptype: keyof typeof chipType
  ) {
    this.sendChip('bcr', 'strangers', type, chiptype)
  }

  public addStrangerChip(
    type: keyof typeof tableChips,
    chiptype: keyof typeof chipType
  ) {
    this.sendChip('stranger', 'strangers', type, chiptype)
  }

  public addUserChip(
    type: keyof typeof tableChips,
    chiptype: keyof typeof chipType
  ) {
    this.sendChip('user', 'users', type, chiptype)
  }

  public sendChip(
    pos: keyof typeof tableChipsPosition,
    role: keyof layerType,
    type: keyof typeof tableChips,
    chiptype: keyof typeof chipType
  ) {
    let chip = new Chip(chiptype)
    this._layer.addChild(chip)
    chip.setScale(false, 0.4, 0.4)
    chip.setPosition(
      { animation: false },
      tableChipsPosition[pos].x,
      tableChipsPosition[pos].y
    )
    setTimeout(() => {
      chip.setPosition(
        { animation: true },
        tableChips[type].x + getRandom(-tableChips[type].xoff, 0),
        tableChips[type].y + getRandom(-tableChips[type].yoff, 0)
      )
    }, 50)
    this.pushToArr(role, type, chip)
  }

  public pushToArr(
    role: keyof layerType,
    type: keyof typeof tableChips,
    chip: Chip
  ) {
    switch (type) {
      case 'banker':
        this._banker[role].push(chip)
        break
      case 'bankerking':
        this._bankerking[role].push(chip)
        break
      case 'bpair':
        this._bankerpair[role].push(chip)
        break
      case 'player':
        this._player[role].push(chip)
        break
      case 'playerking':
        this._playerking[role].push(chip)
        break
      case 'ppair':
        this._playerpair[role].push(chip)
        break
      case 'tie':
        this._tie[role].push(chip)
        break
      case 'tiepair':
        this._tiepair[role].push(chip)
        break
    }
  }

  public grab(
    pos: keyof typeof tableChipsPosition,
    role: keyof layerType,
    type: keyof typeof tableChips
  ) {
    let target: Array<Chip>
    switch (type) {
      case 'banker':
        target = this._banker[role]
        break
      case 'bankerking':
        target = this._bankerking[role]
        break
      case 'bpair':
        target = this._bankerpair[role]
        break
      case 'player':
        target = this._player[role]
        break
      case 'playerking':
        target = this._playerking[role]
        break
      case 'ppair':
        target = this._playerpair[role]
        break
      case 'tie':
        target = this._tie[role]
        break
      case 'tiepair':
        target = this._tiepair[role]
        break
      default:
        target = []
        break
    }
    target.map(c => {
      c.setPosition(
        { animation: true },
        tableChipsPosition[pos].x,
        tableChipsPosition[pos].y
      )
    })
  }

  public clearLayer() {
    this._layer.removeChildren()
    this._playerpair = { strangers: [], users: [] }
    this._playerking = { strangers: [], users: [] }
    this._tiepair = { strangers: [], users: [] }
    this._tie = { strangers: [], users: [] }
    this._bankerking = { strangers: [], users: [] }
    this._banker = { strangers: [], users: [] }
    this._bankerpair = { strangers: [], users: [] }
    this._player = { strangers: [], users: [] }
  }

  public removeChildren() {
    super.removeChildren()
    this.clearLayer()
  }
}
