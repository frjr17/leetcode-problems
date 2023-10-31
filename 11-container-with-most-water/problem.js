/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const width = right - left;
        const currentWater = Math.min(height[left], height[right]) * width;

        maxWater = Math.max(maxWater, currentWater);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};