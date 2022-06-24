/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let cache = new Array(amount + 1).fill(amount + 1)
    cache[0] = 0
    
    for (let i = 0; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                cache[i] = Math.min(cache[i], cache[i - coins[j]] + 1)
            }
        }
    }
    
    return cache[amount] > amount ? -1 : cache[amount]
};