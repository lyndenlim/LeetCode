/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let numberCount = {}

    for (let num of nums) {
        numberCount[num] ? numberCount[num] += 1 : numberCount[num] = 1
    }

    for (let num in numberCount) {
        if (numberCount[num] > nums.length / 2) {
            return num
        }
    }
};