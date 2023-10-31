# Problem 66. Plus One

Given two binary strings a and b, return their sum as a binary string.

```bash

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"


Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
```

## My Solution

```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  return (BigInt("0b" + b) + BigInt("0b" + a)).toString(2);
};
```

This is my solution, and is great (81.27% in Runtime && 87.79% in memory)

## Things to learn:

- JS Extended types
