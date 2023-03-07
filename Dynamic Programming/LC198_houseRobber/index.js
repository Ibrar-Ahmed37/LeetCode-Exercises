// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

//Approach: use Dp if one element is there return houses[0], if 2 then amx of first two
//else use the logic that at any point Math.max(prev1+houses[i],prev2) it will return the max of that element +prev element in maxlootAtnth or prev2 of maxlootatnth
const houseRobber = (houses) => {
    if(houses.length===1)
        return houses[0];
    ;
    if(houses.length===2)
        return Math.max(houses[0],houses[1]);
    let first = houses[0];
    let second = Math.max(houses[0],houses[1])
    for(let i=2; i<houses.length; i++){
        const maxLootAtNth = Math.max(first+houses[i],second);
        first = second;
        second = maxLootAtNth;
    }
    return second;
}
console.log(houseRobber([1,2]));