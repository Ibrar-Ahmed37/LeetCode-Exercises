// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Approach : i have used the helper function of findInflectionPoint(which gives the min number)
//and then used it to do binary search on kinda two sorted arrays ,to have the 
//Time complexity of O(logn)
const findInflectionPoint = (arr) => {
    if(arr.length===1 || arr[0]<arr[arr.length-1])
        return 0;
    let left = 0;
    let right = arr.length - 1;
    while(left<=right){
        const mid = Math.floor((left + right) /2);
        let midVal = arr[mid];
        let rightofMid = arr[mid+1];
        let leftofMid = arr[mid-1];

        if(rightofMid<midVal)
            return mid+1;
        else if(leftofMid>midVal)
            return mid;
        
        if(midVal>arr[left])
            left = mid+1;
        else 
            right= mid-1;
    } 
}
const binarySearch = (arr,left,right,target) =>{
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(arr[mid]>target)
            right = mid-1;
        else if(arr[mid]<target)
            left = mid+1;
        else    
            return mid;
    }
    return -1;
}

const searchInSortedArray = (arr,target) => {
    const inflectionPoint = findInflectionPoint(arr);
    const left = binarySearch(arr, 0, inflectionPoint-1, target);
    const right = binarySearch(arr, inflectionPoint, arr.length-1, target);
    return Math.max(left ,right);
}     
console.log("index : "+searchInSortedArray([3,8,10,1,2],10))