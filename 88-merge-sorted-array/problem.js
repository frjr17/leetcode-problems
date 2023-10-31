/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    const newArray = nums1.filter((v, i) => i < m).concat(nums2).sort((a, b) => a - b)
    nums1.forEach((num, i) => {
        nums1[i] = newArray[i]
    })
};