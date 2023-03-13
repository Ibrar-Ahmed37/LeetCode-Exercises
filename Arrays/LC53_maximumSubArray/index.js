// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1

// Approach: if there is only one element in the array , return the first element
// Take a dp array and at first array index keep first element, loop from first element , take max of that (arr[i],arr[i]+dp[i-1])
//this will tell the maxSUmtillN, for max do math.max(max,dp[i])

//Time Complexity: O(n)
//Space Complexity : O(n)
const maximumSubArray = (arr) =>{
    let max= arr[0]
    if(arr.length===1)
        return max;
    let dp = Array(arr.length).fill(0);
    dp[0] = max;
    
    for(let i=1;i<arr.length; i++){
        dp[i] = Math.max(arr[i]+dp[i-1],arr[i])
        max= Math.max(max,dp[i])
    }
    return max;
}
console.log(maximumSubArray([-2,1,-3,4,-1,2,1,-5,4]))
