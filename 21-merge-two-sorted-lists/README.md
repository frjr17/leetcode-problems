# Problem 2: Add two Numbers

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

```bash
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]


Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
```

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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let temp = new ListNode();
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

  const arr1 = convertToArray(list1);
  const arr2 = convertToArray(list2);

  const mainArr = arr1.concat(arr2);
  // I've had to do this because of negative numbers in lists.The imperative declaration will sort the numbers correctly.
  mainArr.sort((a, b) => a - b);

  mainArr.forEach((n) => {
    addNode(n);
  });

  return mainList.next;
};
```

I'm personally proud of myself for this problem, because I it's mine, although I had to research the nature of linked lists and so on... and It runs great! (71.61% Runtime, 91.40% memory)

## Things to learn:

- Linked Lists
- Data Structures and Algorithms
- Space and Time Complexity
- Pass by Reference vs. pass by value.
