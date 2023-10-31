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