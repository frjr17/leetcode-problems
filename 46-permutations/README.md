# Problem 46. permutations

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

## My Solution

```js
//  My Solution
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  function backtrack(perm, remaining) {
    if (remaining.length === 0) {
      result.push([...perm]);
    } else {
      for (let i = 0; i < remaining.length; i++) {
        const num = remaining[i];
        perm.push(num);
        const newRemaining = [
          ...remaining.slice(0, i),
          ...remaining.slice(i + 1),
        ];
        backtrack(perm, newRemaining);
        perm.pop();
      }
    }
  }

  backtrack([], nums);
  return result;
};
```

It runs great (61.44% runtime, 52.00% memory)

## Things to learn:

- Data Structures and Algorithms
- Space and Time Complexity
