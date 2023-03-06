// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

//Approach: this can be done within a 3 nested for loop but cant pass interview sitting
//so to solve this in O(n^2), iterate over the array(set target = 0-num) and set left and right pointer,
//if the sum of left and right pointer === target push to the result array, else if(sum of left and right pointer) <target (left++),else right++

//imp edge case (this will work only on the sorted array): to remove duplicacy of the triplets you have to check in outer loop as well as in the inner loop as well

const threeSum = (nums) => {
    nums.sort((a,b)=> a-b)
    let result = [];
    for(let i=0;i<nums.length-2;i++){
        const num = nums[i];
        const target = 0 - num;
        if(i>=0 && num===nums[i-1]){
            console.log("repeated "+i)
            continue;
        }
        console.log(i)
        let left = i+1;
        // let prevLeft = null;
        let right = nums.length - 1;
        while(left<right){
            // if(nums[left]===prevLeft){
            //     left++;
            //     continue;
            // }
            if( nums[left] + nums[right] === target){
                result.push([num,nums[left],nums[right]])
                // prevLeft = nums[left];
                left++;
                //or you can place the prevLeft logic(line 13,16-19,22) here with this while loop
                while(nums[left]===nums[left-1])
                    left++;
            }
            else if( nums[left] + nums[right] < target){
                left++;
            }
            else
                right--;
        }
    }        
    return result;
}
console.log(threeSum([0,0,0,1,3,9,0,-2,-1]))