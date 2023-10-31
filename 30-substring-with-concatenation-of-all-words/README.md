# Problem 30. Substring with Concatenation of All Words

You are given a string s and an array of strings words. All the strings of words are of the same length.

A concatenated substring in s is a substring that contains all the strings of any permutation of words concatenated.

For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated substring because it is not the concatenation of any permutation of words.
Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.

## My Solution

```js
//  My Solution
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (s.length === 0 || words.length === 0) {
    return [];
  }

  const wordLength = words[0].length;
  const totalWordLength = wordLength * words.length;
  const wordCountMap = {};

  for (const word of words) {
    if (wordCountMap[word]) {
      wordCountMap[word]++;
    } else {
      wordCountMap[word] = 1;
    }
  }

  const result = [];

  for (let i = 0; i < wordLength; i++) {
    let left = i;
    let right = i;
    let window = {};

    while (right + wordLength <= s.length) {
      const currentWord = s.slice(right, right + wordLength);
      right += wordLength;

      if (wordCountMap[currentWord]) {
        if (window[currentWord]) {
          window[currentWord]++;
        } else {
          window[currentWord] = 1;
        }

        while (window[currentWord] > wordCountMap[currentWord]) {
          const leftWord = s.slice(left, left + wordLength);
          left += wordLength;
          window[leftWord]--;
        }

        if (right - left === totalWordLength) {
          result.push(left);
        }
      } else {
        window = {};
        left = right;
      }
    }
  }

  return result;
};
```

It runs great (88.25% runtime, 60.84% memory)

## Things to learn:

- Data Structures and Algorithms
- Space and Time Complexity
- Pass by Reference vs. pass by value.
