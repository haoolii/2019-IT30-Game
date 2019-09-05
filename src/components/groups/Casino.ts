import Wrapper from '@/components/elements/Wrapper'
import WrapperContainerCenter from '@/components/elements/WrapperContainerCenter'
import Bg from '@/components/objects/Bg'
import Body from '@/components/groups/Body'
import Navtop from '@/components/groups/Navtop'
import Navbottom from '@/components/groups/Navbottom'

export default class Casino extends WrapperContainerCenter {
  private _Body: Wrapper
  private _Navtop: Wrapper
  private _Navbottom: Wrapper
  private _bg: Wrapper

  constructor() {
    super()
    this._bg = new WrapperContainerCenter()
    this._Body = new WrapperContainerCenter()
    this._Navtop = new WrapperContainerCenter()
    this._Navbottom = new WrapperContainerCenter()

    this._bg.addChild(new Bg())
    this._Body.addChild(new Body())
    this._Body.addChild(new Navtop())
    this._Body.addChild(new Navbottom())

    this._centerContainer.addChild(this._bg)
    this._centerContainer.addChild(this._Body)
    this._centerContainer.addChild(this._Navtop)
    this._centerContainer.addChild(this._Navbottom)
  }
}
