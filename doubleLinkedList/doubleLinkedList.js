class Node {
  constructor(value) {
    this.next = null;
    this.prev = null;
    this.value = value;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  createNewNode(value) {
    return new Node(value);
  }
  push(value) {
    this.length++;
    const newNode = this.createNewNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    return this;
  }
  pop() {
    if (!this.head) {
      return this;
    }
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }
    let temp = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;
    temp.prev = null;
    return temp;
  }
  unshift(value) {
    if (!this.head) {
      this.push(value);
      return this;
    }
    this.length++;
    let newNode = this.createNewNode(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    return this;
  }
  reset() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  shift() {
    if (!this.head) return this;
    if (!this.head.next) {
      this.reset();
      return this;
    }
    let temp = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    temp.next = null;
    this.length--;
    return this;
  }
  traverseHead(index){
    console.log("head called")
   let current=this.head;
   let i=0;
   while(i!==index){
    current=current.next;
    i++;
   }
   return current;
  }
  traverseTail(index){
    console.log("tail called")
    let i=0; 
    let currentIndex=this.length-index-1;
    let current=this.tail;
    while(i<currentIndex){
      current=current.prev;
      i++;
    }
    return current; 
  }
  isValidIndex(index){
    return index>=0&&index<=this.length
  }
  get(index){
    if (!this.head) return this; 
    if(!this.isValidIndex(index)) return this; 
    let mid=parseInt(this.length/2);
    if(index<=mid){
      return this.traverseHead(index)
    }else{
     return this.traverseTail(index)
    }
  }
  // set
  set(index,value){
    if (!this.head) return this; 
    if(!this.isValidIndex(index)) return this; 
    const node=this.get(index);
    node.value=value;
    return this
  }
  insert(index,value){
    if (!this.head) return this; 
    if(!this.isValidIndex(index)) return this;  
    if(index==0){
      this.unshift(value);
      return;
    }
    const prevNode=this.get(index-1);
    const newNode=this.createNewNode(value);
    newNode.next=prevNode.next;
    newNode.prev=prevNode
    prevNode.next=newNode; 
    this.length++;
    return this
  } 
  remove(index){
    if (!this.head) return this; 
    if(!(index>=0&&index<this.length)) return this;  
    if(index==0){
      this.shift();
      return;
    } 
    if(index==this.length-1){
      this.pop();
      return;
    } 
    const prevNode=this.get(index-1); 
    prevNode.next= prevNode.next.next; 
    this.length--;
    return this
  }
  print(){
    const arr=[];
    let current=this.head;
    while(current){
     arr.push(current.value);
     current=current.next;
    }
    console.log(arr)
  }
}

const obj = new DoubleLinkedList();
obj.push(0);
obj.push(10);
obj.push(20);
obj.push(30);
obj.push(40);
obj.push(50);
obj.push(60);
obj.push(70);
obj.push(80);
obj.push(90);
// obj.push("last Item");
// obj.pop();
// obj.pop();
// console.log(obj.pop())
// obj.unshift(99)
// obj.unshift(100)
// obj.set(0,22)
obj.print();
// obj.insert(0,111)
obj.remove(2);
obj.print();
// console.log(obj.get(10))
console.log(obj)
