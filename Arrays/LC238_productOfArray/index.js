// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

//Approach: Think of the output array at any element as the product of left and right part of the array , first take an array and then go from right to left
//securing all left products and then similarly from left (last index) to the first one for the right product and simultaneously keep on multiplying both the arrays 

const productOfArray = (nums) =>{
    //use fill method to populate an array
    let outputArr = new Array(nums.length).fill(1);
    console.log(outputArr);
    let product = 1;
    for(let i=0;i<nums.length;i++){
        outputArr[i] = product * outputArr[i];
        product = product * nums[i];
    }
    product = 1;
    // console.log(outputArr) //leftarray populated 
     for(let i=nums.length-1; i>=0; i--){
        outputArr[i] = product * outputArr[i];
        product = product * nums[i]; 
     }
    //  console.log(outputArr); //final array (product of both left and right array)
     return outputArr;
}
productOfArray([1,2,3,4]);