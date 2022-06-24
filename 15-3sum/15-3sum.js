/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a - b)
    
    let result = []
    
    for (let idx = 0; idx < nums.length; idx++) {
        if (idx > 0 && nums[idx] === nums[idx-1]) {
            continue
        }
        
        let left = idx + 1
        let right = nums.length - 1 
        
        while (left < right) {
            let threeSum = nums[idx] + nums[left] + nums[right]
            if (threeSum > 0) {
                right -= 1 
            } else if (threeSum < 0) {
                left += 1
            } else {
                result.push([nums[idx], nums[left], nums[right]])
                left++;
                while (nums[left] === nums[left-1] && left < right) {
                    left++;
                }
            }
        }
    }
    return result
};