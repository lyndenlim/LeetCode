/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
        let titleSplit = title.split(" ")
    let result = []
    for (chunk of titleSplit) {
        if (chunk.length > 2) {
            result.push(chunk.slice(0,1).toUpperCase() + chunk.slice(1,chunk.length).toLowerCase())
        } else {
            result.push(chunk.toLowerCase())
        }
    }
    return result.join(" ")
};