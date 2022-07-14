import React, { useEffect, useRef, useState } from 'react'
import useScreenSize from '../../../hooks/useScreenSize'
import { canvasDrag } from './canvasDrag';
import style from './index.module.css'
// import LineArea from './LineArea';
import NodeArea from './NodeArea';

function Canvas({ node, edge }: { node: Graph.Node[]; edge: Graph.Edge[] }) {
  const { width, height } = useScreenSize()
  const [scaleSize, setScaleSize] = useState<number>(1)
  const canvasRef = useRef<SVGSVGElement>(null!)
  const dragRef = useRef<SVGGElement>(null!)

  useEffect(() => {
    canvasDrag(canvasRef.current, dragRef.current)
  }, [])

  return (
    <div style={{ width: width, height: height - 65 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={style['canvas-container']}
        onWheel={(e) => {
          setScaleSize(e.deltaY < 0 ? scaleSize * 1.05 : scaleSize * 0.95)
        }}
        ref={canvasRef}
      >
        {/* 画布缩放 */}
        <g transform={`scale(${scaleSize})`}>
          {/* 画布移动 */}
          <g ref={dragRef} transform={`translate(0, 0)`}>
            <NodeArea node={node} lines={edge} />
            {/* <LineArea line={edge} /> */}
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Canvas