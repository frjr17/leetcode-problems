# Problem 47. permutations II

Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

## My Solution

```js
//  My Solution
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = new Set();

  function backtrack(start) {
    if (start === nums.length) {
      result.add(nums.join(","));
      return;
    }

    for (let i = start; i < nums.length; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]];
      backtrack(start + 1);
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }

  backtrack(0);

  return Array.from(result, (perm) => perm.split(",").map(Number));
};
```

It runs great (23.90% runtime, 26.52% memory)

## Things to learn:

- Data Structures and Algorithms
- Space and Time Complexity
