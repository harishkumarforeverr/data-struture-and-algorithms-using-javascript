// using the while loop
const arr=[9,0,6,3,4,8,8,4,4,6];

const sort=(arr)=>{
        for(let i=1;i<arr.length;i++){
                let currentValue=arr[i];
                let j=i-1; 
                while(j>=0&&arr[j]>currentValue){
                        arr[j+1]=arr[j];    
                        j--;
                }
                arr[j+1]=currentValue;
                console.log("arrarrarrarr",arr,i,j,currentValue)
        }
        return arr;
}

console.log(sort(arr))




// now using the for loop

// using the while loop
const arr=[9,0,6,3,4,8,8,4,4,6];

const sort=(arr)=>{
        for(let i=1;i<arr.length;i++){
                let currentValue=arr[i];
                let j;
                for(j=i-1;j>=0&&arr[j]>currentValue;j--){
                        arr[j+1]=arr[j];    
                        
                }
                arr[j+1]=currentValue;
                console.log("arrarrarrarr",arr,i,j,currentValue)
        }
        return arr;
}

console.log(sort(arr))
