import * as PIXI from "pixi.js"
import * as WrapperType from '@/components/elements/WrapperType'

export default interface Wrapper {
  /**
   * 座標
   */
  readonly x: number;
  readonly y: number

  /**
   * 大小
   */
  readonly width: number
  readonly height: number

  /**
   * 
   * @param animationOpt 動畫? 
   * @param x 位置
   * @param y 位置
   */

  setPosition(animationOpt: WrapperType.animationOpt, x: number, y: number): void
  /**
   * 設定長寬
   * @param animation 動畫?
   * @param width 寬度
   * @param height 高度
   */
  setSize(animation: boolean, width: number, height: number): void

  /**
   * 添加Container到此Wrapper內
   * @param child 要添加的
   */
  addChild(child: Wrapper): void

  /**
   * 添加Container到此Wrapper內
   * @param child 要添加的
   */
  addContainer(child: any): void

  /**
   * 取得pixi container
   */
  getContainer(): PIXI.Container

  /**
   * 縮放
   * @param animation boolean是否要使用動畫
   * @param scale_x x縮放
   * @param scale_y y縮放
   */
  setScale(animation: boolean, scale_x: number, scale_y: number): void

  /**
   * interactive
   * @param interactive 是否要可以互動
   */
  setInteractive(interactive: boolean): void

  /**
   * Rotation
   * @param animation boolean是否要使用動畫
   * @param rotation 旋轉角度
   */
  setRotation(animation: boolean, rotation: number): void

  /**
   * Alpha
   * @param animation boolean是否要使用動畫
   * @param alpha 透明度
   */
  setAlpha(animation: boolean, alpha: number): void

  /**
   * interactive
   */
  removeChildren(): void

  /**
   * 監聽此Container
   * @param event 監聽
   * @param listener 事件
   */
  on(event: string, listener: any): void

  /**
   * 統一各種手機PC方法
   * @param listener 監聽方法
   */
  onClick(listener: any): void

  /**
   * 統一各種手機PC方法
   * @param listener 監聽方法
   */
  onHover(listener: any): void
}