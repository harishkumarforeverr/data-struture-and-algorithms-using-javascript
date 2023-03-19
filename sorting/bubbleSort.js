// const arr=[9,0,6,3,4,8,8,4,4,6];
const arr=[0, 3, 4, 4, 4, 6, 6, 8, 8, 9];

const sort=(arr)=>{
    let n=arr.length;
    if(n==1){ return arr };
    let bool=false;
    for(let i=0; i<n; i++){
        if(bool) break
        bool=true;
        console.log("sssssssssssssss",i)
        for(let j=0; j<n-1-i; j++){ 
            console.log("inner loop", i,j,arr[j],arr[j+1],arr)
            if(arr[j]>arr[j+1]){
                bool=false;
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}

console.log(sort(arr))
