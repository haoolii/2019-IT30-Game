import Sprite from '@/components/elements/Sprite'
import imagePath from '@/config/imagePath'
import Wrapper from '@/components/elements/Wrapper'
import WrapperContainerCenter from '@/components/elements/WrapperContainerCenter'
import * as WrapperType from '@/components/elements/WrapperType'

export default class WaitNextBetNotify extends WrapperContainerCenter {
  private _w0: Wrapper
  private _w1: Wrapper
  private _w2: Wrapper
  private _w3: Wrapper
  private _w4: Wrapper
  private _w5: Wrapper
  private _w6: Wrapper
  private _wdot1: Wrapper
  private _wdot2: Wrapper
  private _wdot3: Wrapper
  private _animationList:Array<Wrapper> = []
  private _animationStatus:boolean = false
  constructor() {
    super()
    this._w0 = new WrapperContainerCenter()
    this._w1 = new WrapperContainerCenter()
    this._w2 = new WrapperContainerCenter()
    this._w3 = new WrapperContainerCenter()
    this._w4 = new WrapperContainerCenter()
    this._w5 = new WrapperContainerCenter()
    this._w6 = new WrapperContainerCenter()
    this._wdot1 = new WrapperContainerCenter()
    this._wdot2 = new WrapperContainerCenter()
    this._wdot3 = new WrapperContainerCenter()
    
    this._animationList.push(this._w0)
    this._animationList.push(this._w1)
    this._animationList.push(this._w2)
    this._animationList.push(this._w3)
    this._animationList.push(this._w4)
    this._animationList.push(this._w5)
    this._animationList.push(this._w6)
    this._animationList.push(this._wdot1)
    this._animationList.push(this._wdot2)
    this._animationList.push(this._wdot3)
    
    let w0 = new Sprite(imagePath.waitNotify, '0')
    let w1 = new Sprite(imagePath.waitNotify, '1')
    let w2 = new Sprite(imagePath.waitNotify, '2')
    let w3 = new Sprite(imagePath.waitNotify, '3')
    let w4 = new Sprite(imagePath.waitNotify, '4')
    let w5 = new Sprite(imagePath.waitNotify, '5')
    let w6 = new Sprite(imagePath.waitNotify, '6')
    let wdot1 = new Sprite(imagePath.waitNotify, 'dot')
    let wdot2 = new Sprite(imagePath.waitNotify, 'dot')
    let wdot3 = new Sprite(imagePath.waitNotify, 'dot')

    w0.setPosition({animation: false}, 0, -13)
    w1.setPosition({animation: false}, 0, 3)
    w2.setPosition({animation: false}, 0, 3)
    w3.setPosition({animation: false}, 0, 6)
    w4.setPosition({animation: false}, 0, 5)
    w5.setPosition({animation: false}, 0, 5)
    w6.setPosition({animation: false}, 0, 3)
    wdot1.setPosition({animation: false}, 0, 50)
    wdot2.setPosition({animation: false}, 0, 50)
    wdot3.setPosition({animation: false}, 0, 50)

    this._w0.addChild(this.generatorFont(w0))
    this._w1.addChild(this.generatorFont(w1))
    this._w2.addChild(this.generatorFont(w2))
    this._w3.addChild(this.generatorFont(w3))
    this._w4.addChild(this.generatorFont(w4))
    this._w5.addChild(this.generatorFont(w5))
    this._w6.addChild(this.generatorFont(w6))
    this._wdot1.addChild(this.generatorFont(wdot1))
    this._wdot2.addChild(this.generatorFont(wdot2))
    this._wdot3.addChild(this.generatorFont(wdot3))

    this.addChild(this._w0)
    this.addChild(this._w1)
    this.addChild(this._w2)
    this.addChild(this._w3)
    this.addChild(this._w4)
    this.addChild(this._w5)
    this.addChild(this._w6)
    this.addChild(this._wdot1)
    this.addChild(this._wdot2)
    this.addChild(this._wdot3)

    this._w0.setPosition({animation: false}, 0, 0)
    this._w1.setPosition({animation: false}, 70, 0)
    this._w2.setPosition({animation: false}, 140, 0)
    this._w3.setPosition({animation: false}, 210, 0)
    this._w4.setPosition({animation: false}, 280, 0)
    this._w5.setPosition({animation: false}, 350, 0)
    this._w6.setPosition({animation: false}, 420, 0)
    this._wdot1.setPosition({animation: false}, 490, 0)
    this._wdot2.setPosition({animation: false}, 510, 0)
    this._wdot3.setPosition({animation: false}, 530, 0)
    this.animation(true)
  }

  public generatorFont(font: Wrapper): Wrapper{
    let rect = new PIXI.Graphics()
    let cont = new WrapperContainerCenter()
    rect.drawRect(0, 0, 70, 80)
    cont.addContainer(rect)
    cont.addChild(font)
    font.getContainer().mask = rect
    return cont
  }

  public animation(opt: boolean) {
    this._animationStatus = opt
    if (!this._animationStatus) return
    let index = 0
    let limit = this._animationList.length - 1
    let prev: Wrapper
    let interval = setInterval(() => {
      if (!this._animationStatus) {clearInterval(interval)}
      if ( index > limit ) {index = 0}
      if (prev) {
        prev.setPosition({animation: true}, prev.x, prev.y + 20)
      }
      this._animationList[index].setPosition({animation: true}, this._animationList[index].x, -20)
      prev = this._animationList[index]
      index++
    }, 200)
    interval
  }
  public removeChildren(): void {
    super.removeChildren()
    this.animation(false)
  }

  public setPosition(animationOpt: WrapperType.animationOpt, x: number, y: number): void {
    this.updateCenter()
    this._centerContainer.setPosition(animationOpt, x, y)
  }
}