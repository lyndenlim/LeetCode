/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let result = []
    
    for (let i =0; i < intervals.length; i++) { 
        if (intervals[i][0] > newInterval[1]) {
            result.push(newInterval)
            return result.concat(intervals.slice(i, intervals.length))
        } else if (intervals[i][1] < newInterval[0]) {
            result.push(intervals[i])
        } else {
            newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])]
        }
    }
    result.push(newInterval)
    return result
};