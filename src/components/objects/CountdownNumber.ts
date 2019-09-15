import Sprite from '@/components/elements/Sprite'
import WrapperContainer from '@/components/elements/WrapperContainer'
import imagePath from '@/config/imagePath'

export default class CountdownNumber extends WrapperContainer {
  constructor(number: number) {
    super()
    let numberList = ('0' + number).slice(-2).toString().split('')
    numberList.map((num: string, i: number) => {
      let _sprite = new Sprite(imagePath.tablePath, `countdown${num}`)
      let _wrc = new WrapperContainer()
      _wrc.addContainer(_sprite.getContainer())
      _wrc.setPosition({ animation: false }, i * 20, 0)
      this._container.addChild(_wrc.getContainer())
    })
  }
}