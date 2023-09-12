/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//  My Solution
var twoSum = function (nums, target) {
    const newArray = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        for (let j = 1; j < nums.length; j++) {
            const num2 = nums[j]
            // Setting the number if the sum matches target, the array is empty and indexes aren't the same.
            if (num + num2 === target && !newArray.length && i !== j) {
                console.log(num, num2)
                newArray.push(i, j)
            }
        }
    }
    return newArray
};