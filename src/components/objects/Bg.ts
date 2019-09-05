import Texture from '@/components/elements/Texture'
import imagePath from '@/config/imagePath'

export default class Bg extends Texture {
	constructor (){
		super(imagePath.bgPath)
		this.setSize(false, 1950, 900)
		this.setPosition({ animation: false }, -162.5, 0)
	}
}