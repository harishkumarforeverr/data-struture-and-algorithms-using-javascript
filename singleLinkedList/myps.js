class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.index = 0;
  }
  // OK
  print() {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
  // OK
  push(value) {
    const node = new Node(value);
    this.index++;
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }
  pop() {
    if (!this.head) return false;
    let prev = this.head;
    let current = this.head;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    this.tail = prev;
    this.index--;
    if (this.index == 0) {
      this.head = null;
      this.tail = null;
    }
    return true;
  }

  shift() {
    if (!this.head) return false;
    this.head = this.head.next;
    if (!this.head) {
      this.index = 0;
    } else {
      this.index--;
    }
    return true;
  }
  unshift(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.index++;
    return true;
  }
  replaceValueByIndex(index, value) {
    if (index < 0 || index > this.index) return false;
    let i = 0;
    let current = this.head;
    while (i !== index) {
      current = current.next;
      i++;
    }
    current.value = value;
    return true;
  }
  deletValueByIndex(index) {
    console.log(index, this.index);
    if (index < 0 || index >= this.index) return false;
    if (index == 0) {
      this.head = this.head.next;
      return;
    }
    let i = 0;
    let prev = this.head;
    let current = this.head;
    while (i !== index && current.next) {
      prev = current;
      current = current.next;
      i++;
    }
    prev.next = current.next;
    this.index--;
    if (!current.next) {
      this.tail = prev;
    }
    return true;
  }
  deletValueByValue(index) {
    if (!this.head) return false;
    let i = this.head.value;
    let prev = this.head;
    let current = this.head;
    while (i !== index && current.next) {
      prev = current;
      current = current.next;
      i = current.value;
    }
    // if
    prev.next = current.next;
    this.index--;
    if (!current.next) {
      this.tail = prev;
    }
    return true;
  }
  // OK
  reverseTheList() {
    if (!this.head) return false;
    let prev = null;
    this.tail = this.head;
    let current = this.head;
    let next = null;
    while (current.next) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    current.next = prev;
    this.head = current;
    return true;
  }
  getNodeByIndex(index) {
    if (index < 0 || index >= this.index) return false;
    let i = 0;
    let current = this.head;
    while (index !== i) {
      current = current.next;
      i++;
    }
    console.log(current);
    return current;
  }
  insertANode(index, value) {
    if (index <= 0) {
      this.unshift(value);
      return true;
    }

    if (index >= this.index) {
      this.push(value);
      return;
    } 
    const newNode = new Node(value);
    const prevNode=this.getNodeByIndex(index-1);
    newNode.next=prevNode.next;
    prevNode.next=newNode; 
//    10 20 30 40 50
//   20->99->  
//  99->30
  }
}
const obj = new SingleLinkedList();

obj.pop();
obj.push(00);
obj.push(10);
obj.push(20);
obj.pop();
obj.pop();
obj.pop();
obj.pop();
obj.push(00);
obj.push(10);
obj.push(20);
obj.push(30);
obj.push(40);
obj.push(50);
obj.print();
// obj.push(30);
// console.log(obj)
// obj.push(40);
// obj.pop();
// obj.push(50);
obj.push(60);
obj.push(70);
// obj.shift();
// obj.shift();
// obj.replaceValueByIndex(5,11119);
// obj.deletValueByIndex(8);
// obj.print();
// obj.push(110);
obj.print();
obj.insertANode(0,120);
obj.insertANode(2,4235);
obj.insertANode(4,4);
obj.insertANode(433,114);
// obj.pop();
// obj.push(130);
// obj.deletValueByValue(130)
// obj.print();
// obj.reverseTheList();
obj.print();
// obj.getNodeByIndex(1);

//  pending
//  1. insert a node in 1st, in middle, in last
//  2.  get_the_node by index
