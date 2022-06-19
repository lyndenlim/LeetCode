/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    if (nums.reduce((prev, curr) => prev + curr) % 2) return false
    
    let set = new Set()
    set.add(0)
    let targetSum = nums.reduce((prev, curr) => prev + curr) / 2 
    
    for (let i = nums.length - 1; i >= 0; i--) {
        let newSet = new Set()
        for (thing of set) {
            if (thing + nums[i] === targetSum) return true  
            
            newSet.add(thing + nums[i])
            newSet.add(thing)
        }
        
        set = newSet
    }
    
    return set.has(targetSum)
    
};