// Given an integer array nums, return the length of the longest strictly increasing 
// subsequence
// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4

//Approach : every element is an increasing subsequence so fill dp array with 1
//dp[]={1,1,1...,1} relative to the number of elements of arr, now do a nested for 
// set i=1,and j=0 and traverse j till i, and i till the end of the array, if arr[i]>arr[j], then dp at the i position
// dp[i] = math.max(dp[j]+1,dp[i]) , and continue traversing after this

//Time Complexity : O(n^2)
// Space Complexity : O(n)

const lengthofLIS = (arr) => {
    if(arr.length===0)
        return 0;
    let dp = new Array(arr.length).fill(1);
    console.log(dp)
    let maxSoFar =1;
    for(let i=1;i<arr.length;i++){
        for(let j= 0;j<i;j++){
            if(arr[i]>arr[j]){
                dp[i] = Math.max(dp[j]+1,dp[i])
            }
        }
    }
    console.log(dp)

    return (dp[dp.length-1]);
}
console.log(lengthofLIS([7,7,7,7,7,7,7]))