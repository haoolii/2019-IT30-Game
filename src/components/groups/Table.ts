import Wrapper from '@/components/elements/Wrapper'
import WrapperContainerCenter from '@/components/elements/WrapperContainerCenter'
import DeskHover from '@/components/objects/DeskHover'
import Desk from '@/components/objects/Desk'

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
        this.addChild(this._desk)
        this.addChild(this._deskHover_playerpair)
        this.addChild(this._deskHover_playerking)
        this.addChild(this._deskHover_tiepair)
        this.addChild(this._deskHover_tie)
        this.addChild(this._deskHover_bankerking)
        this.addChild(this._deskHover_banker)
        this.addChild(this._deskHover_bankerpair)
        this.addChild(this._deskHover_player)

        this.initPosition()
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
    }

}