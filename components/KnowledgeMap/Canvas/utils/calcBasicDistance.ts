import { basicDistance } from '../config'

/**
 * 计算延长半径
 * @date 2022-07-14
 * @param {any} nodeNumber:number
 * @returns {any}
 */
export const calcBasicDistance = (nodeNumber: number, deg: number): number => {
  return basicDistance + basicDistance * 0.1 * (180 / (1.5 * deg)) * nodeNumber;
}