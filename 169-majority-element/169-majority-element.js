/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let numsCount = {}
    
    for (let i of nums) {
        if (numsCount[i]) {
            numsCount[i] += 1
        } else {
            numsCount[i] = 1
        }
    }
    
    for (let num in numsCount) {
        if (numsCount[num] > nums.length / 2) {
            return num
        }
    }
};