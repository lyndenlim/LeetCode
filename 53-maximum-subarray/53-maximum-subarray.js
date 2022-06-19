/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentMax = 0
    let totalMax = nums[0]
    
    for (let i = 0; i < nums.length; i++) {
        currentMax += nums[i]
        totalMax = Math.max(currentMax, totalMax)
        currentMax = currentMax < 0 ? 0 : currentMax
    }
    
    return totalMax
};