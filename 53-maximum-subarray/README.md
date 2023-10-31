# Problem 53. Maximum Subarray

Given an integer array nums, find the subarray with the largest sum, and return its sum.

## My Solution

```js
//  My Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};
```

It runs great (89.35% runtime, 46.53% memory)

## Things to learn:

- Data Structures and Algorithms
- Space and Time Complexity
