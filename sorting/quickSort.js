const swap=(arr,i,j)=>{
   let temp=arr[i];
   arr[i]=arr[j];
   arr[j]=temp;
}

const quick=(arr,start,end)=>{
     let pivotValue=arr[start];
     let pivotIndex=start+1; 
      for(let i=start+1;i<=end;i++){
         if(arr[i]<pivotValue){
            swap(arr,pivotIndex,i);
            pivotIndex++;
         }
      } 

      swap(arr,start,pivotIndex-1)
     return pivotIndex-1;
}


const arr=[5,9,0,6,3,4,8,8,4,4,6];
const quickSort=(arr,left,right)=>{
         if(left>=right) return arr;
         const pivot=quick(arr,left,right);
         quickSort(arr,left,pivot-1);
         quickSort(arr,pivot+1,right);
         return arr;
} 

console.log(quickSort(arr,0,arr.length-1))
