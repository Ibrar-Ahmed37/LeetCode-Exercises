// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0

//Approach: make a dp array acc to the amount and fill first elem of dp with 0 and all other to infinity because 0 amount will have 0 coins to reach 0
// then traverse from each dp elemtn and do a inner loop on every element in coin arr, if coinvalue<=amount of dp at that point,simply calculate result like  amount at that point at j -coinvalue in the dp array +1 or min of the previous dp[i]
//at the end return dp[dp.length-1]

//Time Complexity: O(n^2)
//Space Complexity: O(amount)

const coinChange = (arr,amount) => {
        let dp = new Array(amount+1).fill(Infinity);
        dp[0] = 0;
        console.log(dp)
        for(let i=1;i<=amount;i++){
            for(let j=0;j<arr.length;j++){
                let result = i-arr[j];
                if(result >= 0){
                    dp[i] = Math.min(dp[result]+1,dp[i])
                }
            } 
        }
        let answer = dp[dp.length-1]
        return (answer !==Infinity ? answer : -1)
    }
console.log(coinChange([2,5],2));