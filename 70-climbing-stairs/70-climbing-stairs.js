/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let oneStep = 1 
    let twoStep = 1
    
    for (let i =1; i < n; i++){
        let temp = oneStep
        oneStep = oneStep + twoStep
        twoStep = temp
    }
    
    return oneStep
};