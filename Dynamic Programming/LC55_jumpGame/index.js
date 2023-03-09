// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

//Approach: I have used a maximum value approach , loop through the arr and on each element calculate maxJump at that point
//maxjump at that point = arr[i]+i, calculate maxreachable through max at maxjump and previous maxreachable
//if maxreachable is at the same index , return false, if maxreachable is at the last index (i.e goal ) or> than it, return true


//Time complexity: O(n)
//Space Complexity: O(1)

const jumpGame = (arr) => {
    
    //method 1 **********************
    // let obj =  new Array(arr.length).fill(false);
    // obj[0] = true;
    // for(let j=1;j<arr.length;j++){
    //     for(let i=0;i<j;i++){
    //         if(obj[i] && i+arr[i]>=j){
    //             obj[j]=true;
    //             break;
    //         }
    //     }
    //     }
    
    // return (obj[arr.length-1]);
    


    //Method 2 *************************
    // if(arr.length===1)
    //     return true;
    // let goal = arr.length -1;
    // for(let i=arr.length-1; i>=0;i--){
    //     if(arr[i]>=goal-i)
    //         goal = i;
    // }
    // return goal===0;



    //Method 3 ***************** - maximum valley approach
    if(arr.length===1)
        return true;
    let maxReachable = 0;
    let goal = arr.length-1;
    for(let i=0;i<arr.length;i++){
        let jump = arr[i];
        let maxJump = jump+i;
        maxReachable = Math.max(maxReachable,maxJump);
        if(maxReachable===i){
            return false;
        }
        else if(maxReachable >= goal)
            return true;
    }
}
console.log(jumpGame([1,2]));