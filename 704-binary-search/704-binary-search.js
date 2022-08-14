/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    
    for (let i = 0; i < nums.length; i++) {
        let mid = Math.floor((left + right) / 2)
        
        if (nums[mid] === target) return mid
        if (nums[mid] > target) {
            right--
        } else {
            left++
        }
    }
    return - 1
};