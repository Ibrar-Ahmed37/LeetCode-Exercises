// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.
const minInRotatedSortedArray = (arr) => {
    //if sorted then return first value(0th) of array
    let min = arr[0]; 
    if(arr[0]<arr[arr.length-1])
        return min;
    let left = 0;
    let right = arr.length - 1;
    while(left<right){
        mid = Math.floor((left + right) /2);
        console.log("mid "+mid);
        console.log("arr[mid] "+arr[mid] + " and arr[left] "+arr[left])
        if(arr[mid] > arr[left]){
            left = mid;
        }
        else if( arr[mid]<arr[left] )
        {
            console.log("here"+arr[mid])
            min = arr[mid];
            right = mid;
        }
        else{
            console.log('in here')
            min=arr[right];
            left++;
        }
    }
    console.log('sfdds')
    return min;
}

console.log(minInRotatedSortedArray([4,5,6,7,1,2,3]));