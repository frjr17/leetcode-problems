# Problem 32. Longest Valid Parentheses

Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses
substring

## My Solution

```js
//  My Solution
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const stack = [];
  let maxLength = 0;

  stack.push(-1);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
      }
    }
  }

  return maxLength;
};
```

It runs great (62.48% runtime, 45.50% memory)

## Things to learn:

- Data Structures and Algorithms
- Space and Time Complexity
