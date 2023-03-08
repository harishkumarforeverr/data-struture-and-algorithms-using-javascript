
// # METHOD 1
const arr=["harish","shiva","seenu","satish"];
console.log(arr, arr.indexOf("shiva "))

// # METHOD 2
const arr=["harish","shiva","seenu","satish"];
console.log(arr, arr.includes("shiva "))


// # METHOD 3
const myarr=[9,0,6,3,4,8,8,4,4,6];
const searchValue=4;

let index=-1;

for(let i=0;i<myarr.length;i++){
          if(myarr[i]==searchValue){
                    index=i;
                    break;
          }  
}

console.log(index)
