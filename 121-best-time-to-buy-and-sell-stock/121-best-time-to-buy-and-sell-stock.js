/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0
    let currentMin = prices[0]
    for (let i = 0; i < prices.length; i++) {
        currentMin = Math.min(currentMin, prices[i])
        maxProfit = Math.max(maxProfit, prices[i] - currentMin)
    }
    
    return maxProfit
};