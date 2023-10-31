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
    let temp = new ListNode(0)
    const mainList = temp;
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

    lists.map(list => convertToArray(list)).flat().sort((a, b) => a - b).map(addNode)

    return mainList.next

};