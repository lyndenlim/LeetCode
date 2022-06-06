/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let smallestDist = 0
    let currentDist = 0 
    let result = []
    for (let i = 0; i < points.length; i++) {
        currentDist = Math.sqrt(points[i][0] ** 2 + points[i][1] ** 2)
        result.push([currentDist, points[i]])
    }
    
    result.sort((a,b) => a[0] - b[0])
    return result.slice(0,k).map(item => item[1])
};