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