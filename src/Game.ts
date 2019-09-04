import Loader from '@/loaders/Loader'
import imagePath from '@/config/imagePath'
import Wrapper from '@/components/elements/Wrapper'
import WrapperContainer from '@/components/elements/WrapperContainer'
import Chip from '@/components/objects/Chip'
import chipType from '@/config/chipType'

export default class Game {
  private _app: PIXI.Application
  private _game: Wrapper
  constructor() {
    this._app = new PIXI.Application({ width: 1625, height: 900 })
    this._game = new WrapperContainer()
    this._app.stage.addChild(this._game.getContainer())
    document.body.appendChild(this._app.view)


    Loader.load(imagePath)
      .on((e: number) => {
        console.log(e)
      })
      .then(() => {
        this.done()
      })
      .catch(err => {
        console.warn(err)
      })
  }

  public done() {
    let _chipType: Array<keyof typeof chipType> = ['1000', '10000', '100000', '1000000', '10000000', '5000000']

    // 噴射
    setInterval(() => {
      let chip = new Chip(_chipType[Math.ceil(Math.random() * 6)])
  
      chip.setPosition({ animation: true, during: Math.ceil(Math.random() * 6) },
        Math.ceil(Math.random() * 1625),
        Math.ceil(Math.random() * 900))

      this._game.addChild(chip)
    }, 100)
  }
}