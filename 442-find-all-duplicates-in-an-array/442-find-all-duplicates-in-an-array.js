/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let numCount = {}
    let result = []
    for (let i of nums) {
        if (numCount[i]) {
            numCount[i] += 1
        } else {
            numCount[i] = 1
        }
    }

    for (let num in numCount) {
        if (numCount[num] >= 2) {
            result.push(parseInt(num))
        }
    }
    return result
};