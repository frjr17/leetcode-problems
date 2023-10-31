/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    const n = nums.length;
    let i = n - 2;

    function reverse(nums, start, end) {
        while (start < end) {
            swap(nums, start, end);
            start++;
            end--;
        }
    }

    function swap(nums, i, j) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i === -1) {
        reverse(nums, 0, n - 1);
        return;
    }

    let j = n - 1;
    while (nums[j] <= nums[i]) {
        j--;
    }

    swap(nums, i, j);
    reverse(nums, i + 1, n - 1);
};