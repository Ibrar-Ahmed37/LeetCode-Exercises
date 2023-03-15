// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

//Approach: sort the arr on the basis of start intervals and now keep one result array(keep arrays first interval there)
//start the loop from 1st index(not 0) , and compare its start with the end of the lastintervals end(if start is less than that)
//update the lastinterval's end in the result array by lastInterval[1] = Math.max(cuurentIntervalend,lastinterval[i]), else if no conflict push the current interval to
//the result array. return result array at the end of the function

//Time Complexity: O(nlogn) , involves sorting algo
//Space Complexity: O()
const mergeIntervals =  (arr) => {
    if(arr.length===0)
        return 0;
    if(arr.length===1)
        return arr;
    arr.sort((a,b) => a[0]-b[0]);
    let result = [arr[0]]
    for(let i=1;i<arr.length; i++)
    { 
        let lastInterval = result[result.length-1]
        const[start,end] = arr[i]
        if(start <= lastInterval[1]){
            lastInterval[1] = Math.max(lastInterval[1],end) 
        }
        else
            {
                result.push([start,end]);
            }
    }
    return result
}
console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]))