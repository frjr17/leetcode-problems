# Problem 1: Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Possible Outputs:**

```bash
Example 1:

    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

    Input: nums = [3,2,4], target = 6
    Output: [1,2]

Example 3:

    Input: nums = [3,3], target = 6
    Output: [0,1]
```

## My Solution

```js
//  My Solution
var twoSum = function (nums, target) {
  const newArray = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    for (let j = 1; j < nums.length; j++) {
      const num2 = nums[j];
      // Setting the number if the sum matches target, the array is empty and indexes aren't the same.
      if (num + num2 === target && !newArray.length && i !== j) {
        console.log(num, num2);
        newArray.push(i, j);
      }
    }
  }
  return newArray;
};
```

This was my solution, but wasn't the best.

## Best Solution

The most voted solution was given to [haleyysz](https://leetcode.com/haleyysz/) who make it using ES6 maps.

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};
```

## Things to learn:

- ES6 Maps
- O(1) vs O(n)
- Keep studying
