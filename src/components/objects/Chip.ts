import Sprite from '@/components/elements/Sprite'
import chipType from '@/config/chipType'
import imagePath from '@/config/imagePath'

export default class Chip extends Sprite {
    public value: keyof typeof chipType
    constructor (value: keyof typeof chipType){
        super(imagePath.chipPath, `${chipType[value].type}`)
        this.value = value
    }
    public setInteractive(interactive: boolean): void{
        this._container.interactive = interactive
        this._container.buttonMode = interactive
    }
}