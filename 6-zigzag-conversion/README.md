# Problem 6. Zigzag Conversion

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P A H N
A P L S I I G
Y I R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

## My Solution

```js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  const result = [];
  const cycleLen = 2 * numRows - 2;
  const n = s.length;

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; i + j < n; j += cycleLen) {
      result.push(s[i + j]);
      if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < n) {
        result.push(s[j + cycleLen - i]);
      }
    }
  }

  return result.join("");
};
```

Is almost great (99.01% runtime, but 77.13% memory)!!

## Things to learn:

- Practice Times
