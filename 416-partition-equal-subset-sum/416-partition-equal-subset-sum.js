/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    if (nums.reduce((prev, curr) => prev + curr) % 2) return false
    
    let targetSum = nums.reduce((prev, current) => prev + current) / 2
    let sumSet = new Set()
    sumSet.add(0)
    
    for (let i = nums.length - 1; i >= 0; i--) {
        let newSumSet = new Set()
        for (let total of sumSet) {
            if (total + nums[i] === targetSum) return true
            
            newSumSet.add(total + nums[i])
            newSumSet.add(total)
        }
        sumSet = newSumSet
    }
    
    return sumSet.has(targetSum)
};