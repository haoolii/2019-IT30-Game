/**
 * 產生隨機變數
 */

function generateKey() {
  var length = 8,
    charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    retVal = ''
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n))
  }
  return retVal
}

/**
 * 亂數產生
 * @param min 最小值
 * @param max 最大值
 */
function getRandom(min: number, max: number): number {
  return Math.round(min + Math.random() * (max - min))
}

/**
 * 轉換千分為
 * @param num 數字
 */
function toCurrency(num: number) {
  let parts = num.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

/**
 * 轉換有中文數字
 * @param num 數字
 */
function todecimal(amount: number, integeronly?: number) {
  if (!Number.isInteger(amount)) {
    return amount
  }
  // if (amount === 0) { return '0' }
  const a = Array.from(amount.toString())
  let v: any = []
  let i = 0
  while (a.length !== 0) {
    if (i === 2) {
      v.unshift('.')
    } else if (i % 3 === 2) {
      v.unshift(',')
    }
    v.unshift(a.pop())
    i++
  }
  if (v.length === 2) {
    v.unshift('0', '.')
  }
  if (v.length > 3) {
    for (i = 0; i < 3; i++) {
      if (['0', '.'].includes(v['v.length - 1'])) {
        v.pop()
      }
    }
  }
  if (v.length > 2) {
    if (v[0] === ',') {
      v.shift()
    }
    if (v[0] === '-' && v[1] === ',') {
      v.splice(1, 1)
    }
  }
  v = v.join('')
  if (integeronly) {
    if (v.split('').includes('.')) {
      return v
    } else {
      return v + '.00'
    }
  }
  return v
}

/**
 * 轉換文字
 */
function tounit(n: number) {
  // if (n === 0) { throw new Error(`tounit input error: ${n}`) }

  let result = ''
  let e = 0
  let el = 0
  let w = 0
  let wl = 0

  e = Math.floor(n / 100000000)
  el = n - e * 100000000
  w = Math.floor(el / 10000)
  wl = el - w * 10000
  if (e > 0) {
    result += e + 'e'
  }
  if (w > 0) {
    result += w + 'w'
  }
  if (wl > 0) {
    result += wl
  }

  if (!result) {
    result = '0'
  }
  return result
}

/**
 * 相加兩個bet
 * @param {*} bet 投注object
 */
var plusBet = function (a: any, b: any) {
  var _bet = {
    banker: 0,
    player: 0,
    bankerking: 0,
    playerking: 0,
    tie: 0,
    tiepair: 0,
    bpair: 0,
    ppair: 0
  }
  _bet['banker'] = Number(a['banker']) + Number(b['banker'])
  _bet['player'] = Number(a['player']) + Number(b['player'])
  _bet['bankerking'] = Number(a['bankerking']) + Number(b['bankerking'])
  _bet['playerking'] = Number(a['playerking']) + Number(b['playerking'])
  _bet['tie'] = Number(a['tie']) + Number(b['tie'])
  _bet['tiepair'] = Number(a['tiepair']) + Number(b['tiepair'])
  _bet['bpair'] = Number(a['bpair']) + Number(b['bpair'])
  _bet['ppair'] = Number(a['ppair']) + Number(b['ppair'])
  return _bet
}

/**
 * 相減兩個bet
 * @param {*} bet 投注object
 */
var minusBet = function (a: any, b: any) {
  var _bet = {
    banker: 0,
    player: 0,
    bankerking: 0,
    playerking: 0,
    tie: 0,
    tiepair: 0,
    bpair: 0,
    ppair: 0
  }
  _bet['banker'] = Number(a['banker']) - Number(b['banker'])
  _bet['player'] = Number(a['player']) - Number(b['player'])
  _bet['bankerking'] = Number(a['bankerking']) - Number(b['bankerking'])
  _bet['playerking'] = Number(a['playerking']) - Number(b['playerking'])
  _bet['tie'] = Number(a['tie']) - Number(b['tie'])
  _bet['tiepair'] = Number(a['tiepair']) - Number(b['tiepair'])
  _bet['bpair'] = Number(a['bpair']) - Number(b['bpair'])
  _bet['ppair'] = Number(a['ppair']) - Number(b['ppair'])
  return _bet
}

/**
 * 計算投注總額
 * @param {*} bet 投注object
 */
var calcBetTotal = function (bet: any) {
  var total = 0
  total += Number(bet['banker'])
  total += Number(bet['player'])
  total += Number(bet['bankerking'])
  total += Number(bet['playerking'])
  total += Number(bet['tie'])
  total += Number(bet['tiepair'])
  total += Number(bet['bpair'])
  total += Number(bet['ppair'])
  return total
}

/**
 * 延遲
 * @param {*} time 延遲時間
 */
var delay = function (time: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  })
}

export {
  getRandom,
  toCurrency,
  todecimal,
  tounit,
  generateKey,
  plusBet,
  minusBet,
  calcBetTotal,
  delay
}
