class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    let newNode = new Node(value);
    this.size++;
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      return;
    }
    newNode.next = this.first;
    this.first = newNode;
  }
  pop() {
    if (!this.first) {
      console.log("pppppppp");
      return this;
    }
    if (this.first == this.last) {
      console.log("ssss");
      this.first = null;
      this.last = null;
      this.size = 0;
      return this;
    }
    this.first = this.first.next;
    this.size--;
    return this;
  }
}

const obj = new Stack();

obj.pop();
obj.pop();
obj.push(10);
obj.push(20);
obj.push(30);
obj.push(40);
obj.pop();
obj.pop();
// obj.pop();
// obj.pop();
// obj.pop();

console.log(obj);
