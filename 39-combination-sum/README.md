# Problem 39. Combination Sum

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the
frequency
of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

## My Solution

```js
//  My Solution
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];

  candidates.sort((a, b) => a - b);

  function backtrack(start, current, remaining) {
    if (remaining === 0) {
      result.push([...current]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }

      if (candidates[i] <= remaining) {
        current.push(candidates[i]);
        backtrack(i, current, remaining - candidates[i]);
        current.pop();
      } else {
        break;
      }
    }
  }

  backtrack(0, [], target);
  return result;
};
```

It runs great (91.98% runtime, 62.82% memory)

## Things to learn:

- Data Structures and Algorithms
- Space and Time Complexity
