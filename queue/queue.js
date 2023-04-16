class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueque(value) {
    const newNode = new Node(value);
    this.size++;
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      return this;
    }
    this.last.next = newNode;
    this.last = newNode;
  }
  dequeque() {
    if (!this.first) {
      return this;
    }
    else if (!this.first.next) {
      this.first = null;
      this.last = null;
      this.size = 0;
      return this;
    }else{
      this.size--;
      this.first=this.first.next;
      return this;
    }
  }
}

const obj = new Queue();
obj.dequeque();
obj.dequeque();
obj.enqueque(10);
obj.enqueque(20);
obj.enqueque(30);
obj.enqueque(40);
obj.dequeque();
obj.dequeque();
obj.dequeque();
obj.dequeque();
// obj.dequeque();
console.log(obj);
