# Problem 108. Convert Sorted Array to Binary Search Tree

Given an integer array nums where the elements are sorted in ascending order, convert it to a
height-balanced binary search tree.

## My Solution

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }

  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);

  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
};
```

Is almost great (65.56% runtime, but 63.02% memory)!! It's incredible to see how, as I'm diving deep in Leetcode, I'm beginning to see how some things that I don't see in web development are more valuable.

## Things to learn:

- Binary Trees
- Data Structures and Algorithms
- Space and Time Complexity
- Pass by Reference vs. pass by value.
