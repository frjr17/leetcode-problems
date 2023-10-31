/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (!nums.includes(target)) {
        return [-1, -1]
    }

    const result = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            result.push(i)
        }
    }
    return [Math.min(...result), Math.max(...result)]
};