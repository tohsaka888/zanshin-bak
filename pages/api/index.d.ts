declare namespace Api {
  type GraphResponse = {
    success: boolean;
    data: {
      node: Graph.Node[];
      edge: Graph.Edge[]
    }
  }
}