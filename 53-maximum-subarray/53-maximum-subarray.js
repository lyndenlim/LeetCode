/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // initialize a result variable and a currentMax variable 
    // we set the result variable to -infinity to account for negative numbers
    // iterate through the array and check if the number is less than 0, reset the currentMax to 0 
    // we want the max of the current num vs the currentMax

    let currentMax = 0
    let maxSum = -Infinity
    
    for (i = 0; i < nums.length; i++){
        currentMax += nums[i]
        maxSum = Math.max(currentMax, maxSum)        
        currentMax = currentMax < 0 ? 0 : currentMax
    }
    return maxSum
};