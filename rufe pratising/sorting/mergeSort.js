const merge=(arr1,arr2)=>{
  let i=0;
  let j=0;
  let temp=[];
  let index=0;
  while(i<arr1.length&&j<arr2.length){
      if(arr1[i]>arr2[j]){
          temp[index]=arr2[j];
          j++;
      }else{
          temp[index]=arr1[i];
          i++;
      }
      index++;
  }    
  while(i<arr1.length){
      temp[index]=arr1[i];
      index++;
      i++;
  } 
  while(j<arr2.length){
      temp[index]=arr2[j];
      index++;
      j++;
  }
  return temp;
}
const mergeSort=(arr)=>{
    if(arr.length<=1) return arr; 
    let midPoint=Math.floor(arr.length/2);
    let leftArr=mergeSort(arr.slice(0,midPoint));
    let rightArr=mergeSort(arr.slice(midPoint));
    return merge(leftArr,rightArr)
}


const arr=[9,0,6,3,4,8,8,4,4,6];
// const arr1=[0,3,4,6,9];
// const arr2=[4,4,6,8,8];
//  excepted output ==> [0, 3, 4, 4, 4, 5, 6, 6, 8, 8, 9]

// console.log(merge(arr1,arr2))
console.log(mergeSort(arr))
