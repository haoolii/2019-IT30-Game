import Wrapper from '@/components/elements/Wrapper'
import WrapperContainerCenter from '@/components/elements/WrapperContainerCenter'
import * as WrapperType from '@/components/elements/WrapperType'
import DeskHover from '@/components/objects/DeskHover'
import Countdown from '@/components/objects/Countdown'
import Desk from '@/components/objects/Desk'
import Dealer from '@/components/objects/Dealer'
import TotalBetNumber from '@/components/objects/TotalBetNumber'
import AreaBetNumber from '@/components/objects/AreaBetNumber'
import * as dat from 'dat.gui'

export default class Table extends WrapperContainerCenter {
    private _desk: Wrapper
    private _deskHover_playerpair: DeskHover
    private _deskHover_playerking: DeskHover
    private _deskHover_tiepair: DeskHover
    private _deskHover_tie: DeskHover
    private _deskHover_bankerking: DeskHover
    private _deskHover_banker: DeskHover
    private _deskHover_bankerpair: DeskHover
    private _deskHover_player: DeskHover
    private _dealer: Wrapper
    private _countdown: Countdown
    private _betNumber_total: TotalBetNumber
    private _betNumber_area_playerpair: AreaBetNumber
    private _betNumber_area_playerking: AreaBetNumber
    private _betNumber_area_tiepair: AreaBetNumber
    private _betNumber_area_tie: AreaBetNumber
    private _betNumber_area_bankerking: AreaBetNumber
    private _betNumber_area_banker: AreaBetNumber
    private _betNumber_area_bankerpair: AreaBetNumber
    private _betNumber_area_player: AreaBetNumber


    constructor() {
        super()
        this._desk = new Desk()
        this._deskHover_playerpair = new DeskHover('playerpair')
        this._deskHover_playerking = new DeskHover('playerking')
        this._deskHover_tiepair = new DeskHover('tiepair')
        this._deskHover_tie = new DeskHover('tie')
        this._deskHover_bankerking = new DeskHover('bankerking')
        this._deskHover_banker = new DeskHover('banker')
        this._deskHover_bankerpair = new DeskHover('bankerpair')
        this._deskHover_player = new DeskHover('player')

        this._betNumber_total = new TotalBetNumber(99954545)
        this._betNumber_area_playerpair = new AreaBetNumber(99954545)
        this._betNumber_area_playerking = new AreaBetNumber(99954545)
        this._betNumber_area_tiepair = new AreaBetNumber(99954545)
        this._betNumber_area_tie = new AreaBetNumber(99954545)
        this._betNumber_area_bankerking = new AreaBetNumber(99954545)
        this._betNumber_area_banker = new AreaBetNumber(99954545)
        this._betNumber_area_bankerpair = new AreaBetNumber(99954545)
        this._betNumber_area_player = new AreaBetNumber(99954545)
        this._countdown = new Countdown()
        this._dealer = new Dealer()

        this.addChild(this._desk)
        this.addChild(this._deskHover_playerpair)
        this.addChild(this._deskHover_playerking)
        this.addChild(this._deskHover_tiepair)
        this.addChild(this._deskHover_tie)
        this.addChild(this._deskHover_bankerking)
        this.addChild(this._deskHover_banker)
        this.addChild(this._deskHover_bankerpair)
        this.addChild(this._deskHover_player)

        this.addChild(this._betNumber_total)
        this.addChild(this._betNumber_area_playerpair)
        this.addChild(this._betNumber_area_playerking)
        this.addChild(this._betNumber_area_tiepair)
        this.addChild(this._betNumber_area_tie)
        this.addChild(this._betNumber_area_bankerking)
        this.addChild(this._betNumber_area_banker)
        this.addChild(this._betNumber_area_bankerpair)
        this.addChild(this._betNumber_area_player)
        this.addChild(this._dealer)
        this.addChild(this._countdown)
        this.initPosition()

        setTimeout(() => {
            this.setDeskhover('bankerking', true)
            this.setDeskhover('playerpair', true)
            this.setDeskhover('banker', true)
        }, 1000);
    }

    public setDeskhover(deskHoverType: string, opt: boolean) {
        switch (deskHoverType) {
            case 'banker':
                this._deskHover_banker.setStatus(opt)
                break
            case 'player':
                this._deskHover_player.setStatus(opt)
                break
            case 'bankerpair':
                this._deskHover_bankerpair.setStatus(opt)
                break
            case 'playerpair':
                this._deskHover_playerpair.setStatus(opt)
                break
            case 'bankerking':
                this._deskHover_bankerking.setStatus(opt)
                break
            case 'playerpair':
                this._deskHover_bankerpair.setStatus(opt)
                break
            case 'tie':
                this._deskHover_tie.setStatus(opt)
                break
            case 'tiepair':
                this._deskHover_tiepair.setStatus(opt)
                break
        }
    }
    private initPosition() {
        let config = {
            'playerpair': {
                x: 198,
                y: 52
            },
            'playerking': {
                x: 345,
                y: 337
            },
            'tiepair': {
                x: 639,
                y: 336
            },
            'tie': {
                x: 515,
                y: 149
            },
            'bankerking': {
                x: 782,
                y: 337
            },
            'banker': {
                x: 900,
                y: 188
            },
            'bankerpair': {
                x: 854,
                y: 61
            },
            'player': {
                x: 122,
                y: 182
            }
        }
        this._desk.setPosition({ animation: true }, 0, 0)
        this._deskHover_playerpair.setPosition({ animation: false }, config['playerpair'].x, config['playerpair'].y)
        this._deskHover_playerking.setPosition({ animation: false }, config['playerking'].x, config['playerking'].y)
        this._deskHover_tiepair.setPosition({ animation: false }, config['tiepair'].x, config['tiepair'].y)
        this._deskHover_tie.setPosition({ animation: false }, config['tie'].x, config['tie'].y)
        this._deskHover_bankerking.setPosition({ animation: false }, config['bankerking'].x, config['bankerking'].y)
        this._deskHover_banker.setPosition({ animation: false }, config['banker'].x, config['banker'].y)
        this._deskHover_bankerpair.setPosition({ animation: false }, config['bankerpair'].x, config['bankerpair'].y)
        this._deskHover_player.setPosition({ animation: false }, config['player'].x, config['player'].y)
        this._countdown.setPosition({ animation: false }, 590, 35)
        this._dealer.setPosition({ animation: false }, 830, 40)

        this._betNumber_total.setPosition({ animation: false }, 670, 130)
        this._betNumber_area_playerpair.setPosition({ animation: false }, 250, 165)
        this._betNumber_area_playerking.setPosition({ animation: false }, 410, 455)
        this._betNumber_area_tiepair.setPosition({ animation: false }, 670, 455)
        this._betNumber_area_tie.setPosition({ animation: false }, 670, 310)
        this._betNumber_area_bankerking.setPosition({ animation: false }, 930, 455)
        this._betNumber_area_banker.setPosition({ animation: false }, 1080, 430)
        this._betNumber_area_bankerpair.setPosition({ animation: false }, 1080, 165)
        this._betNumber_area_player.setPosition({ animation: false }, 230, 430)

        setInterval(() => {
            this._betNumber_total.updateNumber(Math.ceil(Math.random() * 9000000))
            this._betNumber_area_playerpair.updateNumber(Math.ceil(Math.random() * 9000000))
            this._betNumber_area_playerking.updateNumber(Math.ceil(Math.random() * 9000000))
            this._betNumber_area_tiepair.updateNumber(Math.ceil(Math.random() * 9000000))
            this._betNumber_area_tie.updateNumber(Math.ceil(Math.random() * 9000000))
            this._betNumber_area_bankerking.updateNumber(Math.ceil(Math.random() * 9000000))
            this._betNumber_area_banker.updateNumber(Math.ceil(Math.random() * 9000000))
            this._betNumber_area_bankerpair.updateNumber(Math.ceil(Math.random() * 9000000))
            this._betNumber_area_player.updateNumber(Math.ceil(Math.random() * 9000000))
        }, 1000);
    }

    public setPosition(animationOpt: WrapperType.animationOpt, x: number, y: number): void {
        this._centerContainer.setPosition(animationOpt, x, y)
    }

    public countdownStart(num: number) {
        this._countdown.countdownStart(num)
    }
}