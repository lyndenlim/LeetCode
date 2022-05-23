/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
   let copyOfOriginal = original
    for (let num of nums.sort((a, b) => a - b)) {
        if (num === copyOfOriginal) {
            copyOfOriginal *= 2
        }
    }
    return copyOfOriginal
};