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

    return result.join('');
};