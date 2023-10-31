# Problem 38. Count and Say

The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

## My Solution

```js
//  My Solution
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) {
    return "1";
  }

  const prev = countAndSay(n - 1);
  let result = "";
  let count = 1;

  for (let i = 0; i < prev.length; i++) {
    if (prev[i] === prev[i + 1]) {
      count++;
    } else {
      result += count + prev[i];
      count = 1;
    }
  }

  return result;
};
```

It runs great (42.06% runtime, 45.06% memory)

## Things to learn:

- Data Structures and Algorithms
- Space and Time Complexity
