# 1st method
const countChar=(str)=>{
   let obj={}
   for(let i=0;i<str.length;i++){
      if(obj[str[i]]>0){
         obj[str[i]]++;
      }
      else{
              obj[str[i]]=1
      }
   }
   return obj
}

const res=countChar("harish kumar");
console.log("result: ",res)





#2nd method
const countChar=(str)=>{
   let obj={}
   for(let i=0;i<str.length;i++){
   const char=   str[i].toLowerCase() 
      if(obj[char]>0){
         obj[char]++;
      }
      else{
              obj[char]=1
      }
   }
   return obj
}

const res=countChar("Harish kumar");
console.log("result: ",res)



# 3rd method
const countChar=(str)=>{
   let obj={}
   for(let char of str){
     char= char.toLowerCase() 
      if(obj[char]>0){
         obj[char]++;
      }
      else{
              obj[char]=1
      }
   }
   return obj
}

const res=countChar("Harish kumar");
console.log("result: ",res)




#4th method
const countChar=(str)=>{
   let obj={}
   for(let char of str){
     char= char.toLowerCase() 
      obj[char]=++obj[char]||1;
   }
   return obj
}

const res=countChar("Harish kumar");
console.log("result: ",res)



// 5th method
const countChar=(str)=>{
   let obj={}
   for(let char of str){
     if(/[a-z0-9]/.test(char)){
        char= char.toLowerCase() 
      obj[char]=++obj[char]||1;
        }
   }
   return obj
}

const res=countChar("Harish kumar");
console.log("result: ",res)
