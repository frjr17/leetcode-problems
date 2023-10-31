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
    let temp = new ListNode()
    const mainList = temp

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

    const arr1 = convertToArray(list1)
    const arr2 = convertToArray(list2)

    const mainArr = arr1.concat(arr2);
    // I've had to do this because of negative numbers in lists.The imperative declaration will sort the numbers correctly.
    mainArr.sort((a, b) => a - b)

    mainArr.forEach(n => {
        addNode(n)
    })

    return mainList.next
};