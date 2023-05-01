class Graph {
  constructor() {
    this.adjustentList = {};
  }
  addVertex(vertex) {
    if (!this.adjustentList[vertex]) {
      this.adjustentList[vertex] = [];
      return this.adjustentList;
    }
    return undefined;
  }
  addEdge(vertex, newConnection) {
    if (!this.adjustentList[newConnection]) {
      this.adjustentList[newConnection] = [];
    }
    this.adjustentList[vertex].push(newConnection);
    this.adjustentList[newConnection].push(vertex);
  }
  removeEdge(vertex, removingNode) {
    if (this.adjustentList[vertex]) {
      this.adjustentList[vertex] = this.adjustentList[vertex].filter(
        (val) => val !== removingNode
      );
    }
    if (this.adjustentList[removingNode]) {
      this.adjustentList[removingNode] = this.adjustentList[
        removingNode
      ].filter((val) => val !== vertex);
    }
  }
  removeVertex(vertex) {
    if (!this.adjustentList[vertex]) {
      return undefined;
    }
    this.adjustentList[vertex].forEach((val) => {
      this.removeEdge(vertex, val);
    });
    delete this.adjustentList[vertex];
  }
  depthFirstRecursive(start) {
    let visted = { [start]: true };

    let list = [];
    let adjustentList = this.adjustentList;
    (function dfs(start) {
      if (!start) return null;
      list.push(start);
      adjustentList[start].forEach((val) => {
        if (!visted[val]) {
          visted[val] = true;
          dfs(val);
        }
      });
    })(start);
    return list;
  }
  depthFirstIterative(start) {
    const stack = [start];
    const visited = { [start]: true };
    let currentVertex;
    let list = [];
    while (stack.length) {
      currentVertex = stack.pop();
      list.push(currentVertex);
      this.adjustentList[currentVertex].forEach((val) => {
        if (!visited[val]) {
          visited[val] = true;
          stack.push(val);
        }
      });
    }
    return list;
  }
  breadthFirst(start) {
    const queue = [start];
    let visited = { [start]: true };
    let list=[];
    while (queue.length) {
      const currentVertex = queue.shift();
      list.push(currentVertex)
      this.adjustentList[currentVertex].forEach((val) => {
        if (!visited[val]) {
          visited[val] = true;
          queue.push(val);
        }
      });
    }
    return list;
  }
}

let g = new Graph();
//  // part -2
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.adjustentList);
console.log("depthFirstRecursive", g.depthFirstRecursive("A"));
console.log("depthFirstIterative", g.depthFirstIterative("A"));
console.log("breadthFirst", g.breadthFirst("A"));
//breadthFirst

//  // part -1
// g.addVertex("Dallas");
// g.addVertex("Tokyo");
// g.addVertex("Aspen");
// g.addVertex("Los Angeles");
// g.addVertex("Hong Kong");
// g.addEdge("Dallas", "Tokyo");
// g.addEdge("Dallas", "Aspen");
// g.addEdge("Hong Kong", "Tokyo");
// g.addEdge("Hong Kong", "Dallas");
// g.addEdge("Los Angeles", "Hong Kong");
// g.addEdge("Los Angeles", "Aspen");
// g.addEdge("Los Angeles", "Dallas");
// console.log({...g.adjustentList});
// g.removeVertex("Hong Kong")
// console.log(g.adjustentList);
