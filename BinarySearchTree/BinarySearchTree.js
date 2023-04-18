 
class Node{
  constructor(value){
    this.left=null;
    this.right=null;
    this.value=value;
  }
} 
class BinarySearchTree{
  constructor(){
    this.root=null; 
  }
  insert(value){ 
    const newNode=new Node(value)
    if(!this.root){
      this.root=newNode; 
      return
    } 
    let current=this.root
    while(true){
      if(current.value==value) return this;
      else if(current.value>value){ // left side insertion
         if(!current.left){
          current.left=newNode;
          return;
         }else{
          current=current.left
         }
      }
      else if(current.value<value){ // right side insertion
        if(!current.right){
          current.right=newNode;
          return;
         }else{
          current=current.right
         }
      }
    }
  }

  find(value){
    if(!this.root) return undefined;
    let current=this.root;
    while(current){
      if(current.value==value) return current;
      else if(current.value>value){ // left side
        if(!current.left) return undefined;
        else if(current.left) current=current.left;                        
      }else if(current.value<value){ // right side
        if(!current.right) return undefined;
        else if(current.right) current=current.right;   
      }
    }
  }
}  
const str=` 

       10
    5     13
  2  7  11  16


`
console.log(str)
var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
console.log(tree.find(10))

console.log(tree)