//31. Multiple Pointers Pattern

Answers
function MultiPointer(arr) {
    let left=0;
    let right=arr.length-1;
    let sum=0;
    while (left<=right) {
       sum=arr[left]+arr[right]
        if(sum==0)
            return [arr[left],arr[right],left,right] 
        else if (sum>0)
            right--;
        else
            left++;
            
    }
    
}

const res=MultiPointer([-3,-2,-1,0,1,2,2,4])
console.log("sssssssss",res)
