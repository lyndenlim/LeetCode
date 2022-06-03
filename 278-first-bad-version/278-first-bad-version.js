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
        // initializing 3 pointers, left, right, mid pointer
        // mid pointer is half the sum of the left and right 
        // if the current element at the mid pointer is not a bad version, we increment the left pointer to the element right after the current mid pointer
        // this will recalculate the mid pointer and place it between left and right
        // while the left is smaller than the right pointer, we continue to check that the mid pointer
        // in the case that it is a bad version, we move the right pointer to right before the mid pointer
        // repeat this loop until the first version is found
        
        let left = 1
        let right = n
        
        while (left <= right) {
            let mid = Math.floor((left+right) /2 )
            if (isBadVersion(mid)) {
                right = mid - 1 
            } else {
                left = mid + 1
            }
        }
        return left
        
    };
};