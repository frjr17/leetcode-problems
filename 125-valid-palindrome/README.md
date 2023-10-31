# Problem 125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

## My Solution

```js
//  My Solution
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let formatted = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  if (!formatted.trim()) return true;

  if (formatted === formatted.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};
```

It runs great (76.14% runtime, 61.27% memory)

## Things to learn:

- Data Structures and Algorithms
- Space and Time Complexity
