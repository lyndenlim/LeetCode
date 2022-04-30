/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    let result = []
    for (let i = 0; i < s.length; i += k) {
        let chunk = s.slice(i, i + k)
        while (chunk.length !== k) {
            chunk += fill
        }
        result.push(chunk)
    }
    return result
};