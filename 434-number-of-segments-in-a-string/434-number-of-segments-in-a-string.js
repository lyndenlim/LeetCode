/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    counter = 0
    s.split(" ").forEach(segment => {
        if (segment !== "") {
            counter++
        }
    })
    return counter

};