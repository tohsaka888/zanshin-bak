import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import Canvas from '../components/KnowledgeMap/Canvas'
import Header from '../components/KnowledgeMap/Header'
import { baseUrl } from '../config/baseUrl'

const KnowledgeMap: NextPage<{ data: { node: Graph.Node[]; edge: Graph.Edge[] } }> = ({ data }) => {
  return (
    <>
      <Header />
      <Canvas {...data} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${baseUrl}/api/graph`)
  const data: Api.GraphResponse = await res.json()

  return {
    props: {
      data: data.data
    }
  }
}

export default KnowledgeMap