import React, { useEffect, useRef } from 'react'
import { drawLineArea } from './drawLineArea'
import { drawNodeArea } from './drawNodeArea'

function NodeArea({ node, lines }: { node: Graph.Node[]; lines: Graph.Edge[] }) {

  const nodeContainer = useRef<SVGGElement>(null!)

  useEffect(() => {
    drawNodeArea(node, nodeContainer.current, 600, 300)
    drawLineArea(nodeContainer.current, lines)
  }, [lines, node])

  return (
    <g ref={nodeContainer} />
  )
}

export default NodeArea