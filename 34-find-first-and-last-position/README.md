# Problem 34. Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

## My Solution

```js
//  My Solution
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (!nums.includes(target)) {
    return [-1, -1];
  }

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      result.push(i);
    }
  }
  return [Math.min(...result), Math.max(...result)];
};
```

It runs great (80.83% runtime, 50.54% memory)

## Things to learn:

- Data Structures and Algorithms
- Space and Time Complexity
