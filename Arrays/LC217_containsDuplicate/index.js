// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

//Approach: i will iterate over the array and store the element and after storing it
//check whether it was previously in the hm, if yes then return true and break otherwise iterate till the end and then return false 
const containsDuplicate = (arr) => {
    const hashMap = new Map();
    for(let i=0; i<arr.length; i++){
        if(hashMap.has(arr[i])){
            return true;
        }
        hashMap.set(arr[i])
    }
    return false;
}
console.log(containsDuplicate([1,2,3,4,6,7,8,8]));