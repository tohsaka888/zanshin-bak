import { uniqueId } from 'lodash'

export const genGraphData = (): { node: Graph.Node[]; edge: Graph.Edge[] } => {
  const fakeNodeData: Graph.Node[] = [
    {
      id: uniqueId('main-'),
      name: '主节点',
      type: 'main'
    },
  ]

  const fakeEdgeData: Graph.Edge[] = []

  // 生成type1 fake_data
  for (let i = 0; i < 10; i++) {
    const nodeId = uniqueId('type1-')
    let edgeData = { fromId: nodeId, toId: fakeNodeData[0].id, discription: '描述' }
    let nodeData = {
      name: `类型1节点${i}`,
      id: nodeId,
      type: 'type1'
    }
    fakeNodeData.push(nodeData)
    fakeEdgeData.push(edgeData)
  }

  // 生成type2 fake_data
  for (let i = 0; i < 8; i++) {
    const nodeId = uniqueId('type2-')
    let edgeData = { fromId: nodeId, toId: fakeNodeData[0].id, discription: '描述' }
    let nodeData = {
      name: `类型2节点${i}`,
      id: nodeId,
      type: 'type2'
    }
    fakeNodeData.push(nodeData)
    fakeEdgeData.push(edgeData)
  }

  // 生成type3 fake_data
  for (let i = 0; i < 3; i++) {
    const nodeId = uniqueId('type3-')
    let edgeData = { fromId: nodeId, toId: fakeNodeData[0].id, discription: '描述' }
    let nodeData = {
      name: `类型3节点${i}`,
      id: nodeId,
      type: 'type3'
    }
    fakeNodeData.push(nodeData)
    fakeEdgeData.push(edgeData)
  }

  // 生成type4 fake_data
  for (let i = 0; i < 30; i++) {
    const nodeId = uniqueId('type4-')
    let edgeData = { toId: nodeId, fromId: fakeNodeData[0].id, discription: '描述' }
    let nodeData = {
      name: `类型4节点${i}`,
      id: nodeId,
      type: 'type4'
    }
    fakeNodeData.push(nodeData)
    fakeEdgeData.push(edgeData)
  }

  return {
    node: fakeNodeData,
    edge: fakeEdgeData
  }
}