/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
     let numberCount = {};
    for (i of nums) {
        if (numberCount[i]) {
            numberCount[i] += 1
        } else {
            numberCount[i] = 1
        }
    }

    for (i in numberCount){
        if (numberCount[i] > 1){
            return true
        }
    }
    return false
};