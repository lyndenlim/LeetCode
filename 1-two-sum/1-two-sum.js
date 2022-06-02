/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // return the indices that add up to the target num
    // create a hashmap that will store the difference between the current num
    // and the target num as its key and the value being the index
    // we can then iterate through the map and check if the difference is already   within the map, if it is, return the current element along with the value of corresponding key in the map
    
    let numberInfo = {}
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in numberInfo) {
            return [i, numberInfo[target- nums[i]]]
        } else {
            numberInfo[nums[i]] = i
        }
    }
};