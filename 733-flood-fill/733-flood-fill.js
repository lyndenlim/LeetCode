/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let currentColor = image[sr][sc]
    
    if (currentColor === color) return image
    
    let queue = [[sr,sc]]
    
    while (queue.length) {
        let [row, column] = queue.shift()
        
        if (image[row][column] === currentColor) {
            image[row][column] = color
            if (row - 1 >= 0 ) queue.push([row -1, column])
            if (row + 1 < image.length ) queue.push([row +1, column])
            if (column - 1 >= 0 ) queue.push([row, column - 1])
            if (column + 1 < image[row].length ) queue.push([row, column + 1])
        }
    }
    return image
};