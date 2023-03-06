// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//Approach: I will take the complement of the element like(c=target-num), if my object has the complement key (object[c]),push the index i and the object[c] value in it
//else add the key value of element in the object (object[num] =i)
const twoSum = (nums,target) => {
   const numsVisited ={};
   let result = [];
   for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        const complement = target - num;
        if( numsVisited[complement] !== undefined){
            result.push(i);
            result.push(numsVisited[complement])
        }
         numsVisited[num] = i;
   }
   return result;
}
console.log(twoSum([2,7,11,15],9));