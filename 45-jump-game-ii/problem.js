/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    const n = nums.length;
    if (n <= 1) return 0;

    const jumps = new Array(n).fill(Infinity);
    jumps[0] = 0;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (j + nums[j] >= i) {
                jumps[i] = Math.min(jumps[i], jumps[j] + 1);
            }
        }
    }

    return jumps[n - 1];
};