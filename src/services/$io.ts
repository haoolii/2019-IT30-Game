
import io from 'socket.io-client'
import cmd from '@/cmd'

let $io = function () {
  let $io: any
  let token: string
  let timeout: number = 5000
  return {
    initalSocket: function (url: any) {
      token = localStorage.getItem('user') || '1'
      $io = io(url, {
        query: {
          token: token
        }
      })
    },
    on: function (cmd: string, listener: Function) {
      $io.on(cmd, listener)
    },
    emit: function (cmd: string) {
      let args = [].slice.call(arguments, 1)
      $io.emit(cmd, ...args)
    },
    REQ_USER_INFO: function (data?: any) {
      return new Promise((resolve, reject) => {
        let _timeout = setTimeout(reject, timeout);
        $io.emit(cmd.REQ_USER_INFO, data)
        $io.on(cmd.RES_USER_INFO, (data: any) => {
          resolve(data.result)
          clearTimeout(_timeout)
        })
      })
    },
    REQ_USER_LOGIN: function (data?: any) {
      return new Promise((resolve, reject) => {
        let _timeout = setTimeout(reject, timeout);
        $io.emit(cmd.REQ_USER_LOGIN, data)
        $io.on(cmd.RES_USER_LOGIN, (data: any) => {
          resolve(data.result)
          clearTimeout(_timeout)
        })
      })
    },
    REQ_USER_TB_SITDOWN: function (data?: any) {
      return new Promise((resolve, reject) => {
        let _timeout = setTimeout(reject, timeout);
        $io.emit(cmd.REQ_USER_TB_SITDOWN, { tbid: '1' })
        $io.on(cmd.RES_USER_TB_SITDOWN, (data: any) => {
          resolve(data.result)
          clearTimeout(_timeout)
        })
      })
    }
  }
}()

export default $io