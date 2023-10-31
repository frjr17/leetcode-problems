/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const result = [];

    candidates.sort((a, b) => a - b);

    function backtrack(start, current, remaining) {
        if (remaining === 0) {
            result.push([...current]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            if (candidates[i] <= remaining) {
                current.push(candidates[i]);
                backtrack(i, current, remaining - candidates[i]);
                current.pop();
            } else {
                break;
            }
        }
    }

    backtrack(0, [], target);
    return result;
};