Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Examples:

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false




///////////////////////////////////////////////////////// Answer /////////////////////////////////////////////////////////////////////////////////////////////////
function validAnagram(str1,str2) {
   if(str1.length!==str2.length) return false;
   const obj1={};
   const obj2={};
   str1.split("").forEach((val)=>{
      obj1[val]=++obj1[val]||1;
   })
   str2.split("").forEach((val)=>{
      obj2[val]=++obj2[val]||1;
   })
   for(let val in obj1){
      if(!(val in obj2)) return false;
      if(obj2[val]!==obj1[val]) return false
   }
   return true;
}

let res;

res=validAnagram('', '') // true
console.log("result",res)

res=validAnagram('aaz', 'zza') // false
console.log("result",res)

res=validAnagram('anagram', 'nagaram') // true
console.log("result",res)


res=validAnagram("rat","car") // false) // false
console.log("result",res)

res=validAnagram('awesome', 'awesom') // false
console.log("result",res)

res=validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
console.log("result",res)


















############################################################################# 2nd method ###########################################################################

function validAnagram(str1,str2) {
   if(str1.length!==str2.length) return false;
   const obj={}; 
   for(let val of str1){
      obj[val]=++obj[val]||1;
   } 
   for(let i=0;i<str2.length;i++){
      let char=str2[i]; 
      if(!obj[char]){
         return false
      }
      obj[char]--;
   }
   return true
}

let res;

res=validAnagram('', '') // true
console.log("result",res)

res=validAnagram('aaz', 'zza') // false
console.log("result",res)

res=validAnagram('anagram', 'nagaram') // true
console.log("result",res)


res=validAnagram("rat","car") // false) // false
console.log("result",res)

res=validAnagram('awesome', 'awesom') // false
console.log("result",res)

res=validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
console.log("result",res)



