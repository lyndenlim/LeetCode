/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let result = []
    for (let i of nums) {
        if (i % 2 === 0) {
            result.unshift(i)
        } else {
            result.push(i)
        }
    }
    return result
};