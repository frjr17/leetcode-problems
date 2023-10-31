# Problem 94. Binary Tree Inorder Traversal

Given the root of a binary tree, return the inorder traversal of its nodes' values.

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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];
  let stack = [];
  let current = root;
  while (current || stack.length) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else {
      current = stack.pop();
      result.push(current.val);
      current = current.right;
    }
  }

  return result;
};
```

Is almost great (62.33% runtime, but 31.87% memory)!!

## Things to learn:

- List Node
- Data Structures and Algorithms
- Space and Time Complexity
- Pass by Reference vs. pass by value.
