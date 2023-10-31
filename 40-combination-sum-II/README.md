# Problem 40. Combination Sum II

Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

## My Solution

```js
//  My Solution
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];

  function backtrack(start, current, remaining) {
    if (remaining === 0) {
      result.push([...current]);
      return;
    }

    if (remaining < 0) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }

      current.push(candidates[i]);
      backtrack(i + 1, current, remaining - candidates[i]);
      current.pop();
    }
  }

  candidates.sort((a, b) => a - b);
  backtrack(0, [], target);
  return result;
};
```

It runs great (56.03% runtime, 87.41% memory)

## Things to learn:

- Data Structures and Algorithms
- Space and Time Complexity
