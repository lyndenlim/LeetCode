/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let currentColor = image[sr][sc]
    
    if (color === currentColor) return image
    
    let queue = [[sr, sc]]
    
    while (queue.length) {
        let [row, col] = queue.shift()
        if (image[row][col] === currentColor) {
            image[row][col] = color
            if (row - 1 >= 0) queue.push([row-1,col])
            if (row + 1 < image.length) queue.push([row+1,col])
            if (col - 1 >= 0) queue.push([row,col-1])
            if (col + 1 < image[row].length) queue.push([row,col+1])
        }    
    }
    
    return image
};