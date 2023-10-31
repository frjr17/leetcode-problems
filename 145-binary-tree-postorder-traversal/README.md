# Problem 145. Binary Tree Postorder Traversal

Given the root of a binary tree, return the postorder traversal of its nodes' values.

## My Solution

```js
//  My Solution
/**
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const result = [];
  function traverse(node) {
    if (node) {
      traverse(node.left);
      traverse(node.right);
      result.push(node.val);
    }
  }
  traverse(root);

  return result;
};
```

It runs great (80.68% runtime, 89.35% memory)

## Things to learn:

- Data Structures and Algorithms
- Space and Time Complexity
