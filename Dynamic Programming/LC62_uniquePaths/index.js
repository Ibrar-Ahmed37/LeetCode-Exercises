// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

 

// Example 1:
// Input: m = 3, n = 7
// Output: 28
// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

//Approach: Use a dp array and first create row set that to 1, and first column to 1 as well,for other elements calculate
//the up element value and the previous left element value, it will tell how many paths we need to come to that point, at the end,
//calculate the last value it will give the unique paths till the last element.

//Time Complexity: O(m*n)
//Space Complexity: O(m*n)
const uniquePaths = (m,n) =>  {
    let dp = []
    for(let i=0;i<m;i++)
        dp[i] = Array(n).fill(0);
    for(let i=0 ; i<n;i++){
        dp[0][i] = 1;
    }
    for(let i=0 ; i<m;i++){
        dp[i][0] = 1;
    }
    for(let i = 1;i<m;i++){
        for(let j=1;j<n;j++){
            dp[i][j] = dp[i-1][j]+dp[i][j-1];
        }
    }
    return (dp[m-1][n-1])
}
console.log(uniquePaths(3,7))
