/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
   let coordDistanceArray = [];

  for (let i = 0; i < points.length; i++) {
    coordDistanceArray.push([
      Math.sqrt(points[i][0] ** 2 + points[i][1] ** 2),
      points[i],
    ]);
  }

  coordDistanceArray.sort((a, b) => a[0]- b[0]);
  return coordDistanceArray.slice(0, k).map((pair) => pair[1]);
};