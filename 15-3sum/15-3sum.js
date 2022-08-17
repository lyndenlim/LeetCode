/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a - b)
    
    let result = []
    
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === nums[i - 1] && i > 0) {
            continue
        }
        
        let left = i + 1
        let right = nums.length - 1 
        while (left < right) {
            let threeSum = nums[left] + nums[right] + nums[i]
            if (threeSum > 0) { 
                right--
            } else if (threeSum < 0) {
                left++
            } else {
                result.push([nums[left], nums[right], nums[i]])
                left++
                while (nums[left] === nums[left - 1] && left < right) {
                    left++
                }
            }
        }
    
                
        
    }
    return result
};