/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let currentMin = prices[0]
    let maxProfit = 0
    
    for (let price of prices) {
        currentMin = Math.min(currentMin, price)
        maxProfit = Math.max(maxProfit, price - currentMin)
    }
    
    return maxProfit
};