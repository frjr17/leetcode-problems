# Problem 22. Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

## My Solution

```js
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  function generate(current, open, close) {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    if (open < n) {
      generate(current + "(", open + 1, close);
    }

    if (close < open) {
      generate(current + ")", open, close + 1);
    }
  }

  generate("", 0, 0);
  return result;
};
```

Is almost great (76.12% runtime && 5.54% memory)!!

## Things to learn:

- Linked Lists
- Data Structures and Algorithms
- Space and Time Complexity
- Pass by Reference vs. pass by value.
