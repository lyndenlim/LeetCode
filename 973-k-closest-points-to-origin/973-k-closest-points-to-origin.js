/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
     points.sort((a, b) => squaredDistance(a) - squaredDistance(b));
  return points.slice(0, k);

  function squaredDistance([x, y]) {
    return x ** 2 + y ** 2;
  }
};