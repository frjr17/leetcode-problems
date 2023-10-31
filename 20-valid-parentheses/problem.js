/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = []

    for (let letter of s) {
        if (letter === '{' || letter === "(" || letter === '[') {
            stack.push(letter)
        } else {
            if (!stack.length || (stack[stack.length - 1] !== '(' && letter === ")") || (stack[stack.length - 1] !== '[' && letter === "]") || (stack[stack.length - 1] !== '{' && letter === "}")) {
                return false
            }
            stack.pop()
        }
    }

    return !stack.length

};


