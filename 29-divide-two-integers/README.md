# Problem 29. Divide Two Integers

Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

Return the quotient after dividing dividend by divisor.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

## My Solution

```js
//  My Solution
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (A, B) {
  if (A === -2147483648 && B === -1) return 2147483647;
  let ans = 0,
    sign = 1;
  if (A < 0) (A = -A), (sign = -sign);
  if (B < 0) (B = -B), (sign = -sign);
  if (A === B) return sign;
  for (let i = 0, val = B; A >= B; i = 0, val = B) {
    while (val > 0 && val <= A) val = B << ++i;
    (A -= B << (i - 1)), (ans += 1 << (i - 1));
  }
  return sign < 0 ? -ans : ans;
};
```

It runs great (57.69% runtime, 59.46% memory)

## Things to learn:

- Data Structures and Algorithms
- Space and Time Complexity
- Pass by Reference vs. pass by value.
