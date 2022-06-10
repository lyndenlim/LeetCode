/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let tokenStack = []
    
    for (let i =0; i < tokens.length; i++) {
        if (tokens[i] === "+") {
            tokenStack.push(tokenStack.pop() + tokenStack.pop())
        } else if (tokens[i] === "-") {
            let first = tokenStack.pop()
            let second = tokenStack.pop()
            tokenStack.push(second - first)
        } else if (tokens[i] === "/") {
            let first = tokenStack.pop()
            let second = tokenStack.pop()
            tokenStack.push(Math.trunc(second / first))
        } else if (tokens[i] === "*") {
            tokenStack.push(tokenStack.pop() * tokenStack.pop())
        } else {
            tokenStack.push(parseInt(tokens[i]))
        }
    }
    return tokenStack[0]
};