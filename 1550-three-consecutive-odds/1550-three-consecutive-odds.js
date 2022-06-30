/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
     return arr
    .map((num) => num % 2)
    .join("")
    .includes("111");
};