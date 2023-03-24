const arr=[9,0,6,3,4,8,8,4,4,6];
// const arr2=[]; 

const merge=(arr1,arr2)=>{
   const updatedArr=[];
    let i=0,j=0;
    let index=0;
    while(i<arr1?.length && j<arr2?.length){
      if(arr1[i]>arr2[j]){
       updatedArr[index]=arr2[j];
       j++;
      }else{
       updatedArr[index]=arr1[i];
       i++;
      }
     index++;
    }
    while(i<arr1?.length){
     updatedArr[index]=arr1[i];
     index++;
     i++;
    }
    while(j<arr2?.length){
     updatedArr[index]=arr2[j];
     index++;
     j++;
    }
    return updatedArr;
}


const mergeSort=(arr)=>{
   if(arr.length<=1) return arr;
   const mid=Math.floor(arr.length/2);
   const left=mergeSort(arr.slice(0,mid));
   const right=mergeSort(arr.slice(mid));
   return merge(left,right);
 
}

console.log(mergeSort(arr));
