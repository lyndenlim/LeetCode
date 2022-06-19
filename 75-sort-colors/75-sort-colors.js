/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0
    let right = nums.length-1
    let current = 0 
    
    while (current <= right) {
        if (nums[current] === 2) {
            let temp = nums[current]
            nums[current] = nums[right]
            nums[right] = temp
            current--;
            right--;
        } else if (nums[current] === 0) {
            let temp = nums[left] 
            nums[left] = nums[current] 
            nums[current] = temp
            left++;
        }
        current++;
    }
};