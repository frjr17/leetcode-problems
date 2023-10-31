/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (end, start = 1) {
    if (end < start) {
        return [null]
    }
    if (end === start) {
        return [new TreeNode(end)]
    }
    const trees = [];
    for (let i = start; i <= end; i++) {
        const left = generateTrees(i - 1, start);
        const right = generateTrees(end, i + 1);
        left.forEach(l => {
            right.forEach(r => {
                trees.push(new TreeNode(i, l, r))
            })
        })
    }

    return trees;
};