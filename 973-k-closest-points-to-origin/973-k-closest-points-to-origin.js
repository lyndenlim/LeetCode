/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    points.sort((a,b) => getDistance(a) - getDistance(b))
    return points.slice(0,k)
    
    function getDistance([x,y]) {
        return Math.sqrt(x ** 2 + y ** 2)
    }
};