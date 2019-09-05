import Wrapper from '@/components/elements/Wrapper'
import WrapperContainerCenter from '@/components/elements/WrapperContainerCenter'
import Desk from '@/components/objects/Desk'

export default class Table extends WrapperContainerCenter {
    private _desk: Wrapper
    constructor() {
        super()
        this._desk = new Desk()
        this.addChild(this._desk)
        this._desk.setPosition({animation: true}, 0, 0)
    }
}