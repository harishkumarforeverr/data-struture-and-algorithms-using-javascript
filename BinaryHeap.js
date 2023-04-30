 

class BHeap {
    constructor() {
        this.heap=[];
    } 
    // insert(value){
    //     this.heap.push(value);
    //     this.bubbleUp();
    // }
    // bubbleUp(){
    //     let index=this.heap.length-1;
    //     let element=this.heap[index];
    //     while(index>0){
    //         let parentIndex=Math.floor((index-1)/2);
    //         let parentValue=this.heap[parentIndex];
    //         if(parentValue>=element) break;
    //         this.heap[parentIndex]=element;
    //         this.heap[index]=parentValue; 
    //         index=parentIndex; 
    //     }
    // }
    insert(value){
        this.heap.push(value);
        this.bubbleUp()
    }
    bubbleUp(){
        let childIndex=this.heap.length-1;
        let childValue=this.heap[childIndex];
        while(childIndex>0){
            let parentIndex=Math.floor((childIndex-1)/2);
            let parentValue=this.heap[parentIndex];
            if(parentValue>=childValue){
                break;
            }
            this.heap[parentIndex]=childValue;
            this.heap[childIndex]=parentValue;
             childIndex=parentIndex;
        }
    }
     deleteTheValue(){
        const length=this.heap.length-1;
        if(length<0) return undefined;
        this.heap[0]=this.heap[length];
        let popedValue=this.heap.pop();
        let index=0;
           let nextIndex=index;
        while(true){ 
              nextIndex=index;
            let leftIndex=Math.floor((2 * index )+ 1);
            let leftNode=this.heap[leftIndex];
            let swap=false;
            let maxValue=0
            if(length>=leftIndex&&this.heap[leftIndex]>this.heap[index]){
               let leftValue=  this.heap[leftIndex];
                let currentValue=this.heap[index];
                this.heap[leftIndex]=currentValue;
                this.heap[index]=leftValue;
                swap=true;
                nextIndex=leftIndex;
            } 
            //  right node         
            //  Find the index of the right child: 2*index + 2 (make sure its not out of bounds)
            let rightIndex=Math.floor((2 * index )+ 2);
              let rightNode=this.heap[rightIndex];
              if(length>=rightIndex&&this.heap[rightIndex]>this.heap[index]){
               let rightValue=  this.heap[rightIndex];
                let currentValue=this.heap[index];
                this.heap[rightIndex]=currentValue;
                this.heap[index]=rightValue;
                swap=true;
                nextIndex=  rightIndex;
            } 
            if(!swap){
                break;
            }
            index=nextIndex
        }
        return popedValue;
        
    }
}

//                   9
//
//           6              8
//
//     4          4       6      8
//
//  0     4     3    x
const obj=new BHeap();
obj.insert(9);
obj.insert(0); 
obj.insert(6);
obj.insert(3);
obj.insert(4);
obj.insert(8);


obj.insert(8);
obj.insert(4);
obj.insert(4);
obj.insert(6);

console.log(obj.heap)
obj.deleteTheValue()
console.log(obj.heap)
