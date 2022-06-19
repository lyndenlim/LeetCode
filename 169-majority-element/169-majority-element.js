/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let numsCount = {}
    
    for (let i = 0; i < nums.length; i++) {
        if (numsCount[nums[i]]) {
            numsCount[nums[i]] += 1 
        } else {
            numsCount[nums[i]] = 1
        }
    }
    
    for (let num in numsCount) {
        if (numsCount[num] > nums.length / 2) {
            return num
        }   
    }
};