/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length 
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2) 
        if (nums[mid] === target) return mid 
        if (nums[mid] > target) {
            right--;
        } else {
            left++;
        }
    }
    return -1 
};