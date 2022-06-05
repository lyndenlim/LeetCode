/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let numberCount = {}
    
    for (let i =0; i < nums.length; i++) {
        if (numberCount[nums[i]]) {
            numberCount[nums[i]] +=1
        } else {
            numberCount[nums[i]] = 1
        }
    }
    
    for (let number in numberCount) {
        if (numberCount[number] === Math.max(...Object.values(numberCount))) {
            return number
        }
    }
};