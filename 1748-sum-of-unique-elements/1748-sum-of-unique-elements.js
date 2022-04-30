/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    
    let numCount = {}
    for (let num of nums) {
        if (numCount[num]) {
            numCount[num] += 1
        } else {
            numCount[num] = 1
        }
    }

    let nonDupKeys = Object.keys(numCount).filter(key => numCount[key] === 1)
    let nonDupKeysInt = nonDupKeys.map(key => parseInt(key))
    if (nonDupKeysInt.length < 1) {
        return 0
    } else {
        return nonDupKeysInt.reduce((prev, current) => prev + current)
    }
};