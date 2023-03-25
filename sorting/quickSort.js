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
















///##############################2nd times ps ###################################################################################################################
 const swap=(arr,i,j)=>{
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
 }
// const arr=[1,2,3,4,5,6,7,8,9];
const arr=[5,9,0,6,3,4,8,8,4,4,6];

const quick=(arr,start,end)=>{
   let pivotIndex=start+1;
   let pivotValue=arr[start];
   for(let i=start+1;i<=end;i++){
      if(arr[i]<pivotValue){
         swap(arr,pivotIndex,i);
         pivotIndex++; 
      }
   } 
   if(pivotIndex!==start+1)
   swap(arr,pivotIndex-1,start);
   return pivotIndex-1;
}
const quickSort=(arr,start,end)=>{
     if(start>=end) return arr;
     const pivot=quick(arr,start,end);
     quickSort(arr,start,pivot);
     quickSort(arr,pivot+1,end);
    return arr;
   
  
}

console.log(quickSort(arr,0,arr.length-1))
