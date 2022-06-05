/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // create two variables, a left and a right 
        // the left starts at 1 and the right starts at n 
        // while the left is less than or equal to the right initialize a mid variable that will be made up of the half the sum of the left and right
        // we can check if the mid element isBadVersion 
        // if it is, we have to decrement the right pointer to the element right before the mid point else we increment the left pointer up to one element after the mid pointer (since we know that the versions after, before it cant be included based on our parameters)
        // once we exit out loop we can return the left pointer 
        
        let left = 1
        let right = n
        
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (isBadVersion(mid)) {
                right = mid - 1
            } else {
                left = mid + 1 
            }
        }
        return left
    };
};