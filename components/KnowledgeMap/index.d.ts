declare namespace Graph {
  type Node = {
    id: string;
    name: string;
    type: string;
  }

  type Edge = {
    fromId: string;
    toId: string;
    discription: string;
  }
}