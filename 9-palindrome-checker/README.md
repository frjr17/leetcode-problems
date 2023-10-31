# Problem 9. Palindrome Number

Given an integer x, return true if x is a
palindrome
, and false otherwise.

## My Solution

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return (x + "").split("").reverse().join("") === x + "";
};
```

Is almost great (39.55% runtime, but 97.54% memory)!!

## Things to learn:

- Practice Times
