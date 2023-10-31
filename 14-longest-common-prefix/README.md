# Problem 14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

```bash

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

```

## My Solution

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";

  const strsLength = strs.map((s) => s.length);
  let maxStrLength = Math.min(...strsLength);

  for (let i = 0; i < maxStrLength; i++) {
    if (strs.every((str) => str[i] === strs[0][i])) {
      prefix += strs[0][i];
    } else {
      break;
    }
  }

  return prefix;
};
```

This is my solution, and is fairly great (86.4% in Runtime && 62.44% better in memory)

## Best Solution

The best solution was made by [iamawebgeek](https://leetcode.com/iamawebgeek/)

```js
var longestCommonPrefix = function (strs) {
  strs.sort();
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substr(0, i);
  }
  return strs[0];
};
```

## Things to learn:

- Practice makes perfection in that case, I just have to keep learning
