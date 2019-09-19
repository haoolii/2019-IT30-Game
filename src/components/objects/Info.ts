import WrapperContainer from '@/components/elements/WrapperContainer'
import InfoMoneyNumber from '@/components/objects/InfoMoneyNumber'
import Sprite from '@/components/elements/Sprite'
import imagePath from '@/config/imagePath'
import { store } from '@/store/index'
export default class Info extends WrapperContainer {
  private _infoMoneyNumber: InfoMoneyNumber
  private _infoBg: Sprite
  private _moneyIcon: Sprite
  private _balance: number

  constructor() {
    super()
    this._infoBg = new Sprite(imagePath.interfacePath, 'infobg')
    this._moneyIcon = new Sprite(imagePath.interfacePath, 'money')
    this._balance = 0
    this._infoMoneyNumber = new InfoMoneyNumber(this._balance)

    this.addChild(this._infoBg)
    this.addChild(this._moneyIcon)
    this.addChild(this._infoMoneyNumber)

    this._infoMoneyNumber.setPosition({ animation: false }, 70, 67)
    this._moneyIcon.setPosition({ animation: false }, 10, 100)
    this._moneyIcon.setRotation(false, -Math.PI * 0.5)

    let _update = () => {
      let { balance } = store.getState()
      this._infoMoneyNumber.updateNumber(balance)
    }
    store.subscribe(_update)
    _update()
  }
}