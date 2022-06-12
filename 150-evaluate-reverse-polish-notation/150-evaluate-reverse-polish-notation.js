/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let tokensStack = []
    
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === "+") {
            tokensStack.push(tokensStack.pop() + tokensStack.pop())
        } else if (tokens[i] === "*") {
            tokensStack.push(tokensStack.pop() * tokensStack.pop())
        } else if (tokens[i] === "-") {
            let first = tokensStack.pop()
            let second = tokensStack.pop()
            tokensStack.push(second - first)
        } else if (tokens[i] === "/") {
            let first = tokensStack.pop()
            let second = tokensStack.pop()
            tokensStack.push(Math.trunc(second / first))
        } else {
            tokensStack.push(parseInt(tokens[i]))
        }
    }
    
    return tokensStack[0]
};