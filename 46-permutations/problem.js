/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const result = [];

    function backtrack(perm, remaining) {
        if (remaining.length === 0) {
            result.push([...perm]);
        } else {
            for (let i = 0; i < remaining.length; i++) {
                const num = remaining[i];
                perm.push(num);
                const newRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
                backtrack(perm, newRemaining);
                perm.pop();
            }
        }
    }

    backtrack([], nums);
    return result;
};