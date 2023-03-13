// Given an integer array nums, find a 
// subarray
//  that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.
// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.


//Approach: the previous approach for maximum sum subarray can be useful but for - ones we have to cater the min array for dp as well
//but still we will have our result in the max dp array, min will just calculate the min ,max will return the max product from both minarray and maxarray and put in the max dp array at that spot

//Time Complexity: O(n)
//Space Complexity: O(1)

const maximumProductSubArray = (arr) => {
    let maxProductTillN = minProductTillN = max = prevMax = prevMin = arr[0];
    for(let i=1;i<arr.length;i++){
        maxProductTillN = Math.max(arr[i],prevMax*arr[i],prevMin*arr[i])  
        minProductTillN = Math.min(arr[i],prevMax*arr[i],prevMin* arr[i])
        
        max = Math.max(max,maxProductTillN)

        prevMax = maxProductTillN;
        prevMin = minProductTillN;
    }
    return max;
}
console.log(maximumProductSubArray([-2,0,-1]))