/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {
     let counter = 0
    let copyNum1 = num1
    let copyNum2 = num2
    if (num1 === num2 && (num1 !== 0 || num2 !== 0)) {
        return 1
    } else if (num1 === 0 || num2 === 0) {
        return 0
    }
    while (copyNum1 !== 0) {
        if (copyNum1 < copyNum2) {
            copyNum2 -= copyNum1
            counter++
        } else {
            copyNum1 -= copyNum2
            counter++
        }
    }
    return counter
};