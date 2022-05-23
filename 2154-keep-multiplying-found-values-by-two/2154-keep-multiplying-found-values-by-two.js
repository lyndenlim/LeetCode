/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let numsAsSet = new Set(nums)
    let result = original

    while (numsAsSet.has(result)) {
        result *= 2
    }
    return result 
};