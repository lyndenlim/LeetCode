/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0
    let maximumSum = nums[0]
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        maximumSum = Math.max(maximumSum, sum)
        sum = sum < 0 ? 0 : sum
    }
    
    return maximumSum
};