/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let complementIndex = {}
    
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in complementIndex) {
            return [complementIndex[target-nums[i]], i]
        } else {
            complementIndex[nums[i]] = i 
        }
    }
};