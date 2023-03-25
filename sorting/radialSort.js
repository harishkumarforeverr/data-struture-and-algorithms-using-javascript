//  below code example (below code will return the number based on i postion base to 10)
// num i o/p
// 491 0 1
// 491 1 9
// 491 2 4
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}


//  below code example ( these code will return the length of the passed number
//  num
//  491 ==> 3 
//  14 ==> 2
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}


//  below code example
//  num
//  [2,34,65,788,929,2,4]  ==> o/p 3 becoz length 3 is big number of given array
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

const radialSort=(arr)=>{
    const n=mostDigits(arr);
    for(k=0;k<n;k++){
        let digitBuket=Array.from({length:10},()=>[]);
        for(let i=0;i<arr.length;i++){
             const index=getDigit(arr[i],k);
             digitBuket[index].push(arr[i]); 
        }
         arr=[].concat(...digitBuket)
    }
    return arr;
}

const arr=[9,0,6,3,4,8,8,4,4,6,90,44,22,5,2];
console.log(radialSort(arr))
