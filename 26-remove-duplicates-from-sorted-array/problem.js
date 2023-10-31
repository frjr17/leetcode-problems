/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const filteredNums = []
    new Set(nums).forEach((v1, v2, set) => {
        filteredNums.push(v1)
    })

    // Understanded, the logic of the exercise is to not reassign the array.
    filteredNums.forEach((num, i) => {
        nums[i] = num;
    })

    const result = filteredNums.length
    return result
};