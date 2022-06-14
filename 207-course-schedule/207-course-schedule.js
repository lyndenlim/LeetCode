/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let indegrees = Array(numCourses).fill(0)
    let queue = []
    
    for (let [course, prereq] of prerequisites) {
        indegrees[course] += 1 
    }
    
    for (let i = 0; i < indegrees.length; i++) {
        if (indegrees[i] === 0) {
            queue.push(i)
        }
    }
    
    let count = 0 
    
    while (queue.length > 0) {
        let current = queue.shift()
        count += 1 
        
        for (let [course, prereq] of prerequisites) {
            if (current === prereq) {
                indegrees[course] -= 1
                if (indegrees[course] === 0) {
                    queue.push(course)    
                }
            }
        }
    }
    
    return numCourses === count
};