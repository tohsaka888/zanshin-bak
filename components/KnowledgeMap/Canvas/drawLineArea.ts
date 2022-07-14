import * as d3 from 'd3'
import { radius } from './config'

export const drawLineArea = (container: SVGGElement, lineData: Graph.Edge[]) => {
  d3.select(container)
    .selectAll('.line')
    .data(lineData)
    .enter()
    .insert('line', ':first-child')
    .attr('x1', (edge) => {
      const fromEle = d3.select(`#${edge.fromId}`).node() as HTMLDivElement
      return fromEle.getBoundingClientRect().left
    })
    .attr('x2', (edge) => {
      const toEle = d3.select(`#${edge.toId}`).node() as HTMLDivElement
      return toEle.getBoundingClientRect().left
    })
    .attr('y1', (edge) => {
      const fromEle = d3.select(`#${edge.fromId}`).node() as HTMLDivElement
      return fromEle.getBoundingClientRect().top - 60
    })
    .attr('y2', (edge) => {
      const toEle = d3.select(`#${edge.toId}`).node() as HTMLDivElement
      return toEle.getBoundingClientRect().top - 60
    })
    .attr('stroke', '#cecece')
}