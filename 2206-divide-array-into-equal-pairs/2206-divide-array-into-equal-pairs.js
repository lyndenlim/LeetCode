/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let result = []
    for (let num = 0; num < nums.length; num += 2) {
        let pair = nums.sort().slice(num, num + 2)
        console.log(pair)
        if (pair[0] === pair[1]) {
            result.push(true)
        } else {
            result.push(false)
        }
    }
    
    return result.every(value => value === true)
};