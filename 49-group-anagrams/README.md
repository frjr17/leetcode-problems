# Problem 49. Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## My Solution

```js
//  My Solution
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagramGroups = {};

  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");

    if (anagramGroups[sortedStr]) {
      anagramGroups[sortedStr].push(str);
    } else {
      anagramGroups[sortedStr] = [str];
    }
  }

  return Object.values(anagramGroups);
};
```

It runs great (66.19% runtime, 56.46% memory)

## Things to learn:

- Data Structures and Algorithms
- Space and Time Complexity
