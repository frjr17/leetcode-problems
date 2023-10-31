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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let temp = new ListNode(0);
  const mainList = temp;
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

  lists
    .map((list) => convertToArray(list))
    .flat()
    .sort((a, b) => a - b)
    .map(addNode);

  return mainList.next;
};
```

It runs great (72.91% runtime, 19.27% memory)

## Things to learn:

- Linked Lists
- Data Structures and Algorithms
- Space and Time Complexity
- Pass by Reference vs. pass by value.
