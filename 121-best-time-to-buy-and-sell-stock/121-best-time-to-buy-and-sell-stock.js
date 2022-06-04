/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let currentMinimum = prices[0]
    let maxProfit = 0
    
    for (let i = 0; i < prices.length; i++) {
        currentMinimum = Math.min(currentMinimum, prices[i])
        maxProfit = Math.max(maxProfit, prices[i] - currentMinimum)
    }
    return maxProfit
};