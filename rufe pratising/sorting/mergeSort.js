const swap=(arr,i,j)=>{ 
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

const quick=(arr,start,end)=>{
    let pivotIndex=start+1;
    const pivotValue=arr[start];
    for(let i=start+1;i<=end;i++){
        if(arr[i]<pivotValue){
            swap(arr,pivotIndex,i);
            pivotIndex++;
        }
    }
    if(start!==pivotIndex-1)
    swap(arr,pivotIndex-1,start);
    return pivotIndex-1;
}
const quickSort=(arr,left,right)=>{
    if(left>=right)return arr;
    let pivot=quick(arr,left,right);
    quickSort(arr,left,pivot-1);
    quickSort(arr,pivot+1,right);
    return arr;
    
}
const arr=[5,9,0,6,3,4,8,8,4,4,6];
// const arr=[1,2,3,4,5,6,7,8,9]

console.log(quickSort(arr,0,arr.length-1))
