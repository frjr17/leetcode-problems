# Problem 100. Same tree

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let output = true;
  const diff = (t1, t2) => {
    if (t1?.val !== t2?.val) {
      return (output = false);
    }

    if (t1?.left !== undefined && t2?.left !== undefined) {
      diff(t1?.left, t2?.left);
    } else if (!t1?.left && t2?.left) {
      return (output = false);
    } else if (t1?.left && !t2?.left) {
      return (output = false);
    }

    if (t1?.right !== undefined && t2?.right !== undefined) {
      diff(t1?.right, t2?.right);
    } else if (!t1?.right && t2?.right) {
      return (output = false);
    } else if (t1?.right && !t2?.right) {
      return (output = false);
    }
  };

  diff(p, q);

  return output;
};
```

Is almost great (82.05% runtime, but 52.30% memory)!!

## Things to learn:

- List Node
- Data Structures and Algorithms
- Space and Time Complexity
- Pass by Reference vs. pass by value.
