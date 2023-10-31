# Problem 2: Add two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example of Results:

```bash
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```

## My Solution

```js
//  My Solution
var addTwoNumbers = function (l1, l2) {
  var carry = 0;
  var sum = 0;
  var head = new ListNode(0);
  var now = head;
  var a = l1;
  var b = l2;
  while (a !== null || b !== null) {
    sum = (a ? a.val : 0) + (b ? b.val : 0) + carry;
    carry = Math.floor(sum / 10);
    now.next = new ListNode(sum % 10);
    now = now.next;
    a = a ? a.next : null;
    b = b ? b.next : null;
  }
  if (carry) now.next = new ListNode(carry);
  return head.next;
};
```

As an ethical developer, I've to recognize that this is not entirely my solution. After 5 cups of coffee and 6 hours of debugging and asking, I've finally decided to get some help from [https://baffinlee.com/](https://baffinlee.com/leetcode-javascript/problem/add-two-numbers.html) (I've to watch everything with reverse engineering to understand it completely).

In this point, everyone could say: You stole that code. But, the truth is, that I'm not a Senior programmer already. And, as my first mentor, [Andrei Neagoie😊](https://zerotomastery.io/about/instructor/andrei-neagoie/), say: A good programmer looks for help when he has to and uses it, _after understanding what you're copying._

When I was studying that code, I was very confused with Javascript _pass by reference_ method in linked lists (as it were objects). I'll have to review that.

## Things to learn:

- Linked Lists
- Data Structures and Algorithms
- Space and Time Complexity
- Pass by Reference vs. pass by value.
