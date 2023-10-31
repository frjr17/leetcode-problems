# Problem 23. Merge k Sorted Lists

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }

  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  let current = head;

  while (current && current.next) {
    const firstNode = current;
    const secondNode = current.next;

    // Swap the nodes
    prev.next = secondNode;
    firstNode.next = secondNode.next;
    secondNode.next = firstNode;

    prev = firstNode;
    current = firstNode.next;
  }

  return dummy.next;
};
```

It runs great (65.40% runtime, 63.84% memory)

## Things to learn:

- Linked Lists
- Data Structures and Algorithms
- Space and Time Complexity
- Pass by Reference vs. pass by value.
