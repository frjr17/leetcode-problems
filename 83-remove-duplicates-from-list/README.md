# Problem 83. Remove Duplicates from Sorted List

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

## My Solution

```js
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
var deleteDuplicates = function (head) {
  let temp = new ListNode(0);
  let newHead = temp;
  function convertToArray(l) {
    const array = [];
    while (l) {
      array.push(l.val);
      l = l.next;
    }
    return array;
  }

  function addNode(n) {
    temp.next = new ListNode(n);
    temp = temp.next;
  }
  new Set(convertToArray(head)).forEach((v) => {
    addNode(v);
  });

  return newHead.next;
};
```

Is almost great (50% runtime && 50% memory)!!

## Things to learn:

- Linked Lists
- Data Structures and Algorithms
- Space and Time Complexity
- Pass by Reference vs. pass by value.
