class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (current.value == value) return this;
      else if (current.value > value) {
        // left side insertion
        if (!current.left) {
          current.left = newNode;
          return;
        } else {
          current = current.left;
        }
      } else if (current.value < value) {
        // right side insertion
        if (!current.right) {
          current.right = newNode;
          return;
        } else {
          current = current.right;
        }
      }
    }
  }

  find(value) {
    if (!this.root) return undefined;
    let current = this.root;
    while (current) {
      if (current.value == value) return current;
      else if (current.value > value) {
        // left side
        if (!current.left) return undefined;
        else if (current.left) current = current.left;
      } else if (current.value < value) {
        // right side
        if (!current.right) return undefined;
        else if (current.right) current = current.right;
      }
    }
  }
  BFS() {
    // debugger
    if (!this.root) return undefined;
    let current = this.root;
    let queue = [current];
    const data = [];
    while (queue.length) {
      const dequeue = queue.shift();
      data.push(dequeue.value);
      if (dequeue.left) queue.push(dequeue.left);
      if (dequeue.right) queue.push(dequeue.right);
    }
    return data;
  }
  // DFSPreOrder() {
  //   var data = [];
  //   function traverse(node) {
  //     data.push(node.value);
  //     if (node.left) traverse(node.left);
  //     if (node.right) traverse(node.right);
  //   }
  //   traverse(this.root);
  //   return data;
  // }
  // DFSPostOrder() {
  //   var data = [];
  //   function traverse(node) {
  //     if (node.left) traverse(node.left);
  //     if (node.right) traverse(node.right);
  //     data.push(node.value);
  //   }
  //   traverse(this.root);
  //   return data;
  // }
  // DFSInOrder() {
  //   var data = [];
  //   function traverse(node) {
  //     if (node.left) traverse(node.left);
  //     data.push(node.value);
  //     if (node.right) traverse(node.right);
  //   }
  //   traverse(this.root);
  //   return data;
  // }
  DFSPreOrder(){
    //  DFSPreOrder --> center left right
    if(!this.root) return undefined;
    const data=[];
    const traverse=(node)=>{
        data.push(node.value);
        if(node.left) traverse(node.left)
        if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return data;
  }
  DFSPostOrder(){ 
    // DFSPostOrder --> left right center
    if(!this.root) return undefined;
    const data=[];
    const traverse=(node)=>{ 
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      data.push(node.value)
    }
    traverse(this.root)
    return data;
  }
  DFSInOrder(){
    if(!this.root) return undefined;
    const data=[];
    const traverse=(node)=>{ 
      if(node.left) traverse(node.left);
      data.push(node.value);
      if(node.right) traverse(node.right);
    }
    traverse(this.root)
    return data;
  }
}
const str = ` 
  DFSPreOrder --> center left right
  DFSPostOrder --> left right center
  DFSInOrder --> left center right

       10
    5     13
  2  7  11  16


`;
console.log(str);
var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
// console.log(tree.BFS());
// console.log(tree.DFSPreOrder()); 
// console.log(tree.DFSPostOrder());  
console.log(tree.DFSInOrder()); 

// console.log(tree);
