/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
        const numberCount = {};
    for (element of nums) {
        if (numberCount[element]) {
            numberCount[element] += 1
        } else {
            numberCount[element] = 1
        }
    }

    for (number in numberCount) {
        if (numberCount[number] === 1) {
            return number
        }
    }
};