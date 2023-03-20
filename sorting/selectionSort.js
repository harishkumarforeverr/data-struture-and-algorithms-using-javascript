const arr=[9,0,6,3,4,8,8,4,4,6];

const sort=(arr)=>{
        //  implementing selection sort
        for(let i=0;i<arr.length;i++){
                let min=arr[i];
                let index=i;
                for(let j=i;j<arr.length;j++){
                      if(arr[j]<min){
                        min=arr[j];
                              index=j
                      }  
                }
                if(index!==i){
                        let temp=arr[i];
                        arr[i]=arr[index];
                        arr[index]=temp;
                }
        }
        return arr;
}

console.log(sort(arr))




//// optimation in above code
const arr=[9,0,6,3,4,8,8,4,4,6];

const sort=(arr)=>{
        //  implementing selection sort
        for(let i=0;i<arr.length;i++){ 
                let index=i;
                for(let j=i+1;j<arr.length;j++){
                      if(arr[j]<arr[index]){ 
                              index=j
                      }  
                }
                if(index!==i){
                        let temp=arr[i];
                        arr[i]=arr[index];
                        arr[index]=temp;
                }
        }
        return arr;
}

console.log(sort(arr))
