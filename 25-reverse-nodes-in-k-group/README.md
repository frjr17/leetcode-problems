# Problem 25. Reverse Nodes in k-Group

Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

## My Solution

```js
//  My Solution
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  function reverseSublist(start, end) {
    let prev = null;
    let current = start;
    while (current !== end) {
      const nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
    return prev;
  }

  let count = 0;
  let currentNode = head;
  while (count < k && currentNode !== null) {
    currentNode = currentNode.next;
    count++;
  }

  if (count < k) {
    return head;
  } else {
    const reversedHead = reverseSublist(head, currentNode);
    head.next = reverseKGroup(currentNode, k);
    return reversedHead;
  }
};
```

It runs great (77.49% runtime, 63.77% memory)

## Things to learn:

- Linked Lists
- Data Structures and Algorithms
- Space and Time Complexity
- Pass by Reference vs. pass by value.
