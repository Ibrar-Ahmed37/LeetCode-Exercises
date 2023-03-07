// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

//Approach: we use fibonnaci sequence because step at any element is sum of last two, 
//Time Complexity: O(n)
//Space Complexity: O(1)
const climbingStairs = (n) => {
    if(n<=3)
        return n;
    let first = 2;
    let second = 3;
    let sum = 0;
    for(let i=4;i<=n;i++){
        sum = first +second;
        first = second;
        second = sum;
    }
    return sum;
}
console.log(climbingStairs(4))