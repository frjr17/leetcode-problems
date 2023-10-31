# Problem 45. Jump Game II

You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

## My Solution

```js
//  My Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const n = nums.length;
  if (n <= 1) return 0;

  const jumps = new Array(n).fill(Infinity);
  jumps[0] = 0;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (j + nums[j] >= i) {
        jumps[i] = Math.min(jumps[i], jumps[j] + 1);
      }
    }
  }

  return jumps[n - 1];
};
```

It runs great (40.89% runtime, 52.00% memory)

## Things to learn:

- Data Structures and Algorithms
- Space and Time Complexity
