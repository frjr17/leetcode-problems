# Problem 5. Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.

## My Solution

```js
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s === null || s.length < 1) {
    return "";
  }

  let start = 0;
  let end = 0;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(i, i);
    let len2 = expandAroundCenter(i, i + 1);
    let len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
};
```

Is almost great (66.45% runtime, but 81.03% memory)!!

## Things to learn:

- Practice Times
