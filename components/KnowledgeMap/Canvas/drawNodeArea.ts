import * as d3 from 'd3'
import style from './index.module.css'
import { nodeForeignObjectRadius, radius } from './config'
import { calcBasicDistance } from './utils/calcBasicDistance'

const createForeignObject = (container: SVGGElement, width: number, height: number, x: number, y: number) => {
  return d3.select(container)
    .append('foreignObject')
    .attr('width', width)
    .attr('height', height)
    .attr('fill', 'transparent')
    .attr('x', x)
    .attr('y', y)
    .append('xhtml:div')
    .classed(style['node-container'], true)
}

export const drawNodeArea = (nodes: Graph.Node[], container: SVGGElement, x: number, y: number, mode = 1) => {
  // 处理根节点
  const mainNode = nodes.find(node => node.type === 'main')
  // 处理入边节点
  const inSideTypes = ['type1', 'type2', 'type3']
  const inSideNodes: Graph.Node[][] = []
  const maxAngle = 180 / (inSideTypes.length <= 0 ? 1 : inSideTypes.length)
  inSideTypes.forEach((type) => {
    const typeNodes = nodes.filter(item => type === item.type)
    inSideNodes.push(typeNodes)
  })
  // 处理出边节点
  const outSideTypes = ['type4']
  const outSideNodes: Graph.Node[][] = []
  const outMaxAngle = 180 / (outSideTypes.length <= 0 ? 1 : outSideTypes.length)
  outSideTypes.forEach((type) => {
    const typeNodes = nodes.filter(item => type === item.type)
    outSideNodes.push(typeNodes)
  })
  const canvasContainer = d3.select(container)

  // 创建入边节点
  inSideNodes.forEach((nodes, index) => {
    const nodeMaxAngle = maxAngle / (nodes.length + 1)
    const basicDistance = calcBasicDistance(nodes.length, maxAngle)
    const typeContainer = canvasContainer
      .append('g')
      .attr('transform', `rotate(${180 + index * maxAngle})`)
      .attr('transform-origin', `${x + nodeForeignObjectRadius / 2}px ${y + nodeForeignObjectRadius / 2}px`)
    typeContainer
      .append('foreignObject')
      .attr('width', basicDistance)
      .attr('height', 2 * basicDistance)
      .attr('x', x + nodeForeignObjectRadius / 2)
      .attr('y', y + nodeForeignObjectRadius / 2 - basicDistance)
      .selectAll('.node')
      .data(nodes)
      .join('xhtml:div')
      .style('width', radius + 'px')
      .style('height', radius + 'px')
      .style('position', 'absolute')
      .style('transform', (_, idx) => `rotate(${(idx + 1) * nodeMaxAngle}deg)`)
      .style('transform-origin', (_) => {
        return `${0}px ${calcBasicDistance(nodes.length, maxAngle)}px`
      })
      .classed(style['node'], true)
      .append('div')
      .attr('id', (item) => item.id)
  })

  // 创建出边节点
  outSideNodes.forEach((nodes, index) => {
    const nodeMaxAngle = outMaxAngle / (nodes.length + 1)
    const basicDistance = calcBasicDistance(nodes.length, outMaxAngle)
    const typeContainer = canvasContainer
      .append('g')
      .attr('transform', `rotate(${index * outMaxAngle})`)
      .attr('transform-origin', `${x + nodeForeignObjectRadius / 2}px ${y + nodeForeignObjectRadius / 2}px`)
    typeContainer
      .append('foreignObject')
      .attr('width', basicDistance)
      .attr('height', 2 * basicDistance)
      .attr('x', x + nodeForeignObjectRadius / 2)
      .attr('y', y + nodeForeignObjectRadius / 2 - basicDistance)
      .selectAll('.node')
      .data(nodes)
      .join('xhtml:div')
      .style('width', radius + 'px')
      .style('height', radius + 'px')
      .style('position', 'absolute')
      .style('transform', (_, idx) => `rotate(${(idx + 1) * nodeMaxAngle}deg)`)
      .style('transform-origin', (_) => {
        return `${0}px ${calcBasicDistance(nodes.length, outMaxAngle)}px`
      })
      .classed(style['node'], true)
      .append('div')
      .attr('id', (item) => item.id)
  })

  // 创建根节点
  createForeignObject(container, nodeForeignObjectRadius, nodeForeignObjectRadius, x, y)
    .append('xhtml:div')
    .style('width', radius + 'px')
    .style('height', radius + 'px')
    .classed(style['node'], true)
    .append('div')
    // .text(mainNode?.name || '')
    .attr('id', mainNode?.id || '')
}