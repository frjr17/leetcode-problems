# Problem 20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

```bash
Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
```

## My Solution

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (let letter of s) {
    if (letter === "{" || letter === "(" || letter === "[") {
      stack.push(letter);
    } else {
      if (
        !stack.length ||
        (stack[stack.length - 1] !== "(" && letter === ")") ||
        (stack[stack.length - 1] !== "[" && letter === "]") ||
        (stack[stack.length - 1] !== "{" && letter === "}")
      ) {
        return false;
      }
      stack.pop();
    }
  }

  return !stack.length;
};
```

This is my solution, and is fairly great (86.4% in Runtime && 62.44% better in memory)

## Best Solution

The best solution was made by [PratikSen07](https://leetcode.com/PratikSen07/)

```js
var isValid = function (s) {
  // Initialize stack to store the closing brackets expected...
  let stack = [];
  // Traverse each charater in input string...
  for (let idx = 0; idx < s.length; idx++) {
    // If open parentheses are present, push it to stack...
    if (s[idx] == "{") {
      stack.push("}");
    } else if (s[idx] == "[") {
      stack.push("]");
    } else if (s[idx] == "(") {
      stack.push(")");
    }
    // If a close bracket is found, check that it matches the last stored open bracket
    else if (stack.pop() !== s[idx]) {
      return false;
    }
  }
  return !stack.length;
};
```

## Things to learn:

- Practice makes perfection in that case, I just have to keep learning
