function countUniqueValues(arr) {
    if(arr.length==0) return 0;
    let i=0; 
    let j=1;
    let length=arr.length
    while( j<length ){
        if(arr[i]!==arr[j]){
               ++i;
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
        j++;
    }
    return i+1;
}

let res="";
res=countUniqueValues([1,1,1,1,1,2]) // 2
console.log("res : ",res);
res=countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
console.log("res : ",res);
res=countUniqueValues([]) // 0
console.log("res : ",res);
res=countUniqueValues([-2,-1,-1,0,1]) // 4
console.log("res : ",res);
