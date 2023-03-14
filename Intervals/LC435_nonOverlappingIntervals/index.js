// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

 

// Example 1:

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

// Example 2:

// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

//Approach: Sort the intervals on the basis of start interval and loop from the first interval ,kepp prevendinterval to the 0th end interval
//if startInterval<prevendinterval, means its overlapping, inc count take the min of boths end and keep it there in that array end
//otherwise if it doesnt overlaps, simply update the prevendInterval to the endinterval 
//return count at the end of the function

//Time Complexity: O(nlogn)
//Space Complexity: O(1)
const nonOverlappingIntervals = (arr) => {
    arr.sort((a,b) => a[0]-b[0]) //sorts the array intervals on the basis of startInterval(i.e only compares the first element)
    console.log(arr);
    let prevEndInterval = arr[0][1];
    let count = 0;
    for(let i=1;i<arr.length;i++){
        let startInterval = arr[i][0]
        let endInterval = arr[i][1]
        if(startInterval<prevEndInterval)
        {
                count++;
                prevEndInterval = Math.min(endInterval,prevEndInterval)
                console.log("endinterval "+ endInterval)
        }
        else
            prevEndInterval = endInterval;
    }
    return  count;
}
console.log(nonOverlappingIntervals([[1,100],[11,22],[1,11],[2,12]]))