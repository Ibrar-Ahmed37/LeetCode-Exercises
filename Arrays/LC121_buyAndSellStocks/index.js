// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

//Approach: at any element, get the cheapest price till that element and then calculate currentprice by (price-CP)
//and maintain a maxProfit which will calculate between the new currentprice and the previous maxprofit
const buyAndSellStocks = (prices) => {
    let maxProfit = 0; 
    let cheapestPrice =prices[0];
    for(let i= 0; i<prices.length; i++){
        const price = prices[i];
        if(price<cheapestPrice)
            cheapestPrice = price;
        currentPrice = price - cheapestPrice;
        maxProfit = Math.max(maxProfit,currentPrice)
    }
    return maxProfit;
}

console.log(buyAndSellStocks([2,4,1]));