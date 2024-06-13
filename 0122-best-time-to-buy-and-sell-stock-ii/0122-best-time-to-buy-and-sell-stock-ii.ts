function maxProfit(prices: number[]): number {
    let maxProfitPrice = 0;
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] > prices[i - 1]){
            let diff = prices[i] - prices[i - 1];
            maxProfitPrice += diff;
        }
    }
    return maxProfitPrice;
};