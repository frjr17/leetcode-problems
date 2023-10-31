/**
 * @param {number} n
 * @return {number}
 */
let memory = []
var climbStairs = function (n) {
    if (n <= 2) return n;
    if (memory[n] != undefined) return memory[n]
    memory[n] = climbStairs(n - 1) + climbStairs(n - 2)
    return memory[n]
};