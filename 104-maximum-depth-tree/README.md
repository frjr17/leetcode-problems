# Problem 104. Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

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
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root, side) {
  if (!root) {
    return 0;
  }
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
};
```

Is almost great (92.98% runtime, but 96.05% memory)!! It's incredible to see how, as I'm diving deep in Leetcode, I'm beginning to see how some things that I don't see in web development are more valuable.

## Things to learn:

- Binary Trees
- Data Structures and Algorithms
- Space and Time Complexity
- Pass by Reference vs. pass by value.
