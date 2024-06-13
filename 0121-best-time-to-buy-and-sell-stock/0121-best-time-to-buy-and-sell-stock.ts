function maxProfit(prices: number[]): number {
    let maxProfitPrice = 0 , minPrice = prices[0] , sellPrice , profit;
    for(let i = 1; i < prices.length; i++){
        sellPrice = prices[i];
        profit = sellPrice - minPrice;
        maxProfitPrice = Math.max(maxProfitPrice, profit);
        
        if(sellPrice < minPrice) minPrice = sellPrice;
    }
    return maxProfitPrice;
};