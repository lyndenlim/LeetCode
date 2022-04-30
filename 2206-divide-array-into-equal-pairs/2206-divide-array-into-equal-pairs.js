/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let numSet = new Set() 
    for (let num of nums) {
        if (numSet.has(num)) {
            numSet.delete(num)
        } else {
            numSet.add(num)
        }
    }

    return numSet.size === 0 
};