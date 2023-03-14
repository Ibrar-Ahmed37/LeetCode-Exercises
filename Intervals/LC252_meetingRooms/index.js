//Given an array of intervals (starttime,endttime), return true if meetings can be attended in all the intervals given
//Example: meetingRooms([[0,30],[5,10],[15,20]])  -> false
//Example 2: meetingRooms([[7,10],[2,4]]) -> true

//Approach: traverse through the interval array, make start and end separate arrays
//sort them and traverse through them if(start[i+1]<end[i]),return false, out of the loop return true

//Time Complexity: O(nlogn)
//Space Complexity: O(n)
const meetingRooms = (intervals) => {
    const start = [];
    const end = [];
    intervals.map(interval=> {
        start.push(interval[0])
        end.push(interval[1])
    })
    start.sort((a,b) => a-b)
    end.sort((a,b) => a-b)
    for(let i=0;i<start.length-1;i++)
    {
        console.log(start[i+1])
        if(start[i+1]<end[i])
            return false
    }
    return true;
}
console.log(meetingRooms([[0,1],[2,3],[6,7]]))