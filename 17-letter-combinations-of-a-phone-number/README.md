# Problem 17. Letter Combinations of a Phone Number

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

## My Solution

```js
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === "") {
    return [];
  }

  const phoneMap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const result = [];

  const backtrack = (combination, index) => {
    if (index === digits.length) {
      result.push(combination);
      return;
    }

    const digit = digits[index];
    const letters = phoneMap[digit];

    for (let i = 0; i < letters.length; i++) {
      backtrack(combination + letters[i], index + 1);
    }
  };

  backtrack("", 0);
  return result;
};
```

Is almost great (70.63% runtime, but 77.87%% memory)!!

## Things to learn:

- Two-pointer approach
- More Practice Times
