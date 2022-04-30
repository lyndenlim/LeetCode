/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
     let result = {}
    for (let num of nums) {
        result[num] = Math.abs(num)
    }

    for (let num in result) {
        if (result[num] === Math.min(...Object.values(result))) {
            return parseInt(num)
        }
    }
};