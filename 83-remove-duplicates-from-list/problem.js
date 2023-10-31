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
    let temp = new ListNode(0)
    let newHead = temp;
    function convertToArray(l) {
        const array = []
        while (l) {
            array.push(l.val)
            l = l.next
        }
        return array
    }

    function addNode(n) {
        temp.next = new ListNode(n);
        temp = temp.next;
    }
    new Set(convertToArray(head)).forEach((v) => {
        addNode(v)
    })

    return newHead.next

};