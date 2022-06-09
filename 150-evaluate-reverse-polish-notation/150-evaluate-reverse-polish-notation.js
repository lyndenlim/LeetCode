/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
     let tokenStack = [];
  for (let idx = 0; idx < tokens.length; idx++) {
    if (tokens[idx] === "+") {
      tokenStack.push(tokenStack.pop() + tokenStack.pop());
    } else if (tokens[idx] === "-") {
      let a = tokenStack.pop();
      let b = tokenStack.pop();
      tokenStack.push(b - a);
    } else if (tokens[idx] === "/") {
      let a = tokenStack.pop();
      let b = tokenStack.pop();
      tokenStack.push(Math.trunc(b / a));
    } else if (tokens[idx] === "*") {
      tokenStack.push(tokenStack.pop() * tokenStack.pop());
    } else {
      tokenStack.push(parseInt(tokens[idx]));
    }
  }
  return tokenStack[0];
};