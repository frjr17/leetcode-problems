# Problem 70. Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

```bash
Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step


Constraints:

1 <= n <= 45
```

## My Solution

```js
/**
 * @param {number} n
 * @return {number}
 */
let memory = [];
var climbStairs = function (n) {
  if (n <= 2) return n;
  if (memory[n] != undefined) return memory[n];
  memory[n] = climbStairs(n - 1) + climbStairs(n - 2);
  return memory[n];
};
```

This is my solution, and is great (67.97% in Runtime && 26.83% in memory)

## Things to learn:

- Recursion
