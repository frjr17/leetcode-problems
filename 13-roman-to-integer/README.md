# Problem 13. Roman to Integer

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

```bash
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

- I can be placed before V (5) and X (10) to make 4 and 9.
- X can be placed before L (50) and C (100) to make 40 and 90.
- C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

```bash
Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

## My Solution

```js
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanNumbers = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  let num = 0;
  for (let i = 0; i < s.length; i++) {
    let str = s[i];
    const _str = s[i] + s[i + 1];

    if ("IXC".includes(str) && romanNumbers[_str]) {
      i++;
      str = _str;
    }

    num += romanNumbers[str];
  }

  return num;
};
```

This is my solution, and is great in Runtime (75.80% in Runtime), but not in memory usage (32.43%)

## Best Solution

The best solution was made by [garyguan0713](https://leetcode.com/garyguan0713/)

```js
symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  value = 0;
  for (let i = 0; i < s.length; i += 1) {
    symbols[s[i]] < symbols[s[i + 1]]
      ? (value -= symbols[s[i]])
      : (value += symbols[s[i]]);
  }
  return value;
};
```

## Things to learn:

- JS Memory Usage Tricks
