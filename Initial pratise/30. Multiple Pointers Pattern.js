///////////////////// ############################# method 1

function sumZero(arr){
   for(let i=0;i<arr.length;i++){
      for(let j=i+1;j<arr.length;j++){
          if(!(arr[i]+arr[j])) return [arr[i],arr[j]]
       }
   } 
}


let res=sumZero([-4 ,-3,-2,-1,0,1,2]);
console.log("ssssssssssss",res)
