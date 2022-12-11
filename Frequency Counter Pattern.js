// # #######################################         method 1           # #######################################   
function validate(arr1,arr2) {

        for(let i=0;i<arr1.length;i++){
           let index=arr2.indexOf(arr1[i]**2);
            if(index<0){
               return false;
            }
             arr2.splice(index,1);  
        } 
   return true;
}
let res;

res=validate([1,2,3],[1,4,9] );
console.log(res)   // expected true

res=validate([1,3],[2,4,9] );
console.log(res)   // expected false
 
res=validate([1,2,3],[4,9] );
console.log(res)   // expected false

res=validate([1,2,1,3],[1,4,9] );
console.log(res)   // expected false

res=validate([1,2,1,3],[1,4,1,9] );
console.log(res)   // expected true





//  input => [1,2,3] and [1,4,6]  ==> output true
//  input => [2,3] and [1,4,6]  ==> output false
//  input => [1,2,3] and [1,6]  ==> output false


// condition 1st arr and 2nd arr length must be same and must be have same frequency for example
// [1,2,1,3] then 2nd arr must be [1,4,1,6] then only the answer is OK



// # #######################################         method 2         # #######################################      



// function validate(arr1,arr2) {

//         for(let i=0;i<arr1.length;i++){
//            let index=arr2.indexOf(arr1[i]**2);
//             if(index<0){
//                return false;
//             }
//              arr2.splice(index,1);  
//         } 
//    return true;
// } 
function validate(arr1,arr2) {
   if(arr1.length!==arr2.length) return false;
   let obj1={};
   let obj2={};
   arr1.forEach((val)=>{
      obj1[val]= ++obj1[val] || 1
   })
   
   arr2.forEach((val)=>{
      obj2[val]= ++obj2[val] || 1
   }) 
   for(let val in obj1){
      if(!(val**2 in obj2)){
         return false;
      }
      if(obj2[val**2]!==obj1[val]) {
         return false;
      }
   }
   return true
}


let res;

res=validate([1,2,3],[1,4,9] );
console.log(res)   // expected true

res=validate([1,3],[2,4,9] );
console.log(res)   // expected false
 
res=validate([1,2,3],[4,9] );
console.log(res)   // expected false

res=validate([1,2,1,3],[1,4,9] );
console.log(res)   // expected false

res=validate([1,2,1,3],[1,4,1,9] );
console.log(res)   // expected true





//  input => [1,2,3] and [1,4,6]  ==> output true
//  input => [2,3] and [1,4,6]  ==> output false
//  input => [1,2,3] and [1,6]  ==> output false


// condition 1st arr and 2nd arr length must be same and must be have same frequency for example
// [1,2,1,3] then 2nd arr must be [1,4,1,6] then only the answer is OK

