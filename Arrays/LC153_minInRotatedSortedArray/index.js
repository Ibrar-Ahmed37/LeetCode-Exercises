// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

//Approach: to achieve that in O(logn) we have to use binary search algo (beneficial to do when something is already sorted)
//so if the arr[0]<arr[lastelement], simply return first element,i.e its not rotated else
// start from 
const minInRotatedSortedArray = (arr) => {
    if(arr.length===1)
        return arr[0]
    if(arr[0]<arr[arr.length-1])
        return arr[0];
    let left = 0;
    let right = arr.length - 1;
    while(left<=right){
        const mid = Math.floor((left + right) /2);
        let midVal = arr[mid];
        let rightofMid = arr[mid+1];
        let leftofMid = arr[mid-1];

        if(rightofMid<midVal)
            return rightofMid;
        else if(leftofMid>midVal)
            return midVal;
        
        if(midVal>arr[left])
            left = mid+1;
        else 
            right= mid-1;
    }
}

console.log(minInRotatedSortedArray([9,10,15,0,3,4,5,6]));