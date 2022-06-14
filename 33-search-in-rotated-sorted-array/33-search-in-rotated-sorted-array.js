/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(array, target) {
    let start = 0
  let end = array.length - 1

  while(start <= end){
    let mid = Math.floor((start + end)/2)
    if (array[mid] === target) return mid
    if (array[start] <= array[mid]){ //left side is sorted
      if (array[start] <= target && target <= array[mid]){
        end = mid - 1
      } else {
        start = mid + 1
      }
    } else { //right side is sorted
      if (array[mid] <= target && target <= array[end]){
        start = mid + 1
      } else {
        end = mid - 1
      }
    }

    
  }
    return -1
};