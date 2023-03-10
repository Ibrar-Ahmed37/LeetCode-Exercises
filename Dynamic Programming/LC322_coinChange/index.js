const coinChange = (arr,amount) => {
        let dp = new Array(amount+1).fill(0);
        
        for(let i=0;i<=amount;i++){
            dp[i]=i;
        }    
        console.log(dp)
}
(coinChange([1,2,5],3));