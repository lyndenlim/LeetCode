/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0
    let right = nums.length -1 
    
    let current = 0 
    
    function swap(i,j) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
    
    while (current <= right) {
        if (nums[current] === 0) {
            swap(left,current)
            left += 1 
        } else if (nums[current] === 2) {
            swap(current,right)
            right -= 1 
            current -= 1 
        }
        current += 1 
    }
};