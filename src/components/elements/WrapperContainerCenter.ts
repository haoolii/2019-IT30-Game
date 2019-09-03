import Wrapper from '@/components/elements/Wrapper'
import WrapperContainer from '@/components/elements/WrapperContainer'
import * as WrapperType from '@/components/elements/WrapperType'

export default class WrapperContainerCenter implements Wrapper {
  protected _container: Wrapper
  protected _centerContainer: Wrapper

  constructor() {
    this._container = new WrapperContainer()
    this._centerContainer = new WrapperContainer()
    this._centerContainer.getContainer().pivot.set(this._centerContainer.width / 2, this._centerContainer.height / 2)
    this._centerContainer.setPosition({ animation: false }, this._centerContainer.width / 2, this._centerContainer.height / 2)
    this._container.addChild(this._centerContainer)
  }

  updateCenter() {
    this._centerContainer.getContainer().pivot.set(this._centerContainer.width / 2, this._centerContainer.height / 2)
    this._centerContainer.setPosition({ animation: false }, this._centerContainer.width / 2, this._centerContainer.height / 2)
  }

  setPosition(animationOpt: WrapperType.animationOpt, x: number, y: number): void {
    this._container.setPosition(animationOpt, x, y)
  }

  setSize(animation: boolean, width: number, height: number): void {
    this._container.setSize(animation, width, height)
  }

  addChild(child: Wrapper): void {
    this._centerContainer.addChild(child)
    this.updateCenter()
  }

  addContainer(child: any): void {
    this._centerContainer.addContainer(child)
    this.updateCenter()
  }

  getContainer(): PIXI.Container {
    return this._container.getContainer()
  }

  setScale(animation: boolean, scale_x: number, scale_y: number): void {
    this._centerContainer.setScale(animation, scale_x, scale_y)
  }

  setInteractive(interactive: boolean): void {
    this._container.getContainer().buttonMode = true
    this._container.setInteractive(interactive)
  }

  setRotation(animation: boolean, rotation: number): void {
    this._centerContainer.setRotation(animation, rotation)
  }

  setAlpha(animation: boolean, alpha: number): void {
    this._container.setAlpha(animation, alpha)
  }

  removeChildren(): void {
    this._centerContainer.getContainer().removeChildren()
  }

  on(event: string, listener: any): void {
    this._container.on(event, listener)
  }

  onClick(listener: Function) {
    this._container.onClick(listener)
  }

  onHover(listener: Function): void {
    this._container.onHover(listener)
  }
  get x(): number {
    return this._container.x;
  }

  get y(): number {
    return this._container.y;
  }

  get width(): number {
    return this._container.width;
  }

  get height(): number {
    return this._container.height;
  }
}