/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // return the index where the target is found, if it's not found return -1
    // create a index variable
    // starting at the middle of the array, index variable should hold a value of half of the length of the array
    // check from the middle, if the value is bigger than the target we decrement the index, otherwise we incrementing the index 
    // return the index when the target is found, else -1 
    
    if (!nums.includes(target)) return -1
    
    let idx = Math.floor(nums.length / 2 )
    
   while (nums[idx] !== target ) {
       if (nums[idx] > target) {
           idx--
       } else if (nums[idx] < target) {
           idx++
       } 
   }
    return idx
        
    
};