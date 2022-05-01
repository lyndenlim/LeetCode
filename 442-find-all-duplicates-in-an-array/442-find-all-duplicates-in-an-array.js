/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let numCount = {}
    let result = []
    for (let i of nums) {
        if (numCount[i]) {
            result.push(i)
            numCount[i] += 1
        } else {
            numCount[i] = 1
        }
    }

    return result
};