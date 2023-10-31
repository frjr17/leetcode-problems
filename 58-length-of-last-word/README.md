# Problem 58. Length of last word

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

```bash
Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4


Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
```

## My Solution

```js
//  My Solution
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  return s.trim().split(" ")[s.trim().split(" ").length - 1].length;
};
```

It runs really well. (85.46% Runtime, 90.83% memory)
