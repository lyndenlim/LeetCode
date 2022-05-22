/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    const product = nums.reduce((prev, current) => prev * current)
    if (product === 0 || isNaN(product)) {
        return 0
    }
    const sign = Math.sign(product)
    return sign
};