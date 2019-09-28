import Loader from '@/loaders/Loader'
import imagePath from '@/config/imagePath'
import Wrapper from '@/components/elements/Wrapper'
import WrapperContainer from '@/components/elements/WrapperContainer'
import loadingPath from '@/config/loadingPath'
import Casino from '@/components/groups/Casino'
import Loading from '@/components/groups/Loading'
import $io from '@/services/$io'
import { store, actions } from '@/store/index'
import { async } from 'q'

export default class Game {
  private _app: PIXI.Application
  private _game: Wrapper
  private _loading: Wrapper

  constructor() {
    this._app = new PIXI.Application({ width: 1625, height: 900 })
    this._game = new WrapperContainer()
    this._loading = new WrapperContainer()
    this._game.addChild(this._loading)
    this._app.stage.addChild(this._game.getContainer())
    document.body.appendChild(this._app.view)

    $io.initalSocket(process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://it30.herokuapp.com')
    $io.on('connect', () => {
      console.log('connect')
    })

    // 先load載入頁面
    this.loadimage(loadingPath)
      .then(() => {
        // 再load所有圖片
        return this.loadimage(imagePath, 0)
      })
      .then(() => {
        return this.loadInfo()
      }).then(() => {
        return this.initalInfo()
      }).then(() => {
        this.setup()
      })
  }

  private setup(): void {
    let casino = new Casino()
    this._game.addContainer(casino.getContainer())
  }

  private loadimage(imagePath: any, delay?: number): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        let loading = new Loading()
        this._loading.addChild(loading)
        Loader.load(imagePath)
          .on((e: number) => {
            loading.update(e * 100)
          })
          .then(() => {
            return loading.done(delay)
          })
          .then(() => {
            this._loading.removeChildren()
            resolve()
          })
      } catch (err) {
        reject(err)
      }
    })
  }


  private initalInfo() {
    return new Promise(async (resolve, reject) => {
      try {
        setTimeout(async () => {
          await $io.REQ_USER_LOGIN()
          await $io.REQ_USER_TB_SITDOWN()
          let userinfo: any = await $io.REQ_USER_INFO()
          store.dispatch(actions.updateBalance({ balance: userinfo.balance }))
          resolve()
        }, 1000);
      } catch (err) {
        console.log(err)
      }
    })
  }
  private loadInfo() {
    return new Promise((resolve, reject) => {
      let user = localStorage.getItem('user')
      resolve()
    })
  }
}