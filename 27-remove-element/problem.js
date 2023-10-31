/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    const diff = nums.filter((num) => num !== val);
    const total = diff.length;
    for (let i = 0; i < nums.length; i++) {
        const isVal = nums[i] === val;
        if (isVal && diff.length) {
            nums[i] = diff.pop();
        }
    }
    return total;
};