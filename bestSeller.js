

// Leetcode Q :) - 121

const prices = [7,1,5,3,6,4]

let globalProfit = 0;
let minPrice = prices[0]; 

for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    const currentProfit = currentPrice - minPrice;
    globalProfit = Math.max(globalProfit, currentProfit);
    minPrice = Math.min(minPrice, currentPrice);
}

console.log(globalProfit);
