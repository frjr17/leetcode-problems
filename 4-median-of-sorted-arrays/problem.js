/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const nums3 = nums1.concat(nums2);
    nums3.sort((a, b) => a - b)

    const length = nums3.length;
    if (length % 2 === 0) {
        return (nums3[length / 2 - 1] + nums3[length / 2]) / 2;
    } else {
        return nums3[Math.floor(length / 2)];
    }
};