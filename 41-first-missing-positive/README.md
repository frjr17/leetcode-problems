# Problem 41. First Missing Positive

Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

## My Solution

```js
//  My Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function firstMissingPositive(nums) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      swap(nums, i, nums[i] - 1);
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return n + 1;
}
```

It runs great (96.33% runtime, 71.94% memory)

## Things to learn:

- Data Structures and Algorithms
- Space and Time Complexity
