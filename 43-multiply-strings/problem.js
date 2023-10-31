/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    const m = num1.length;
    const n = num2.length;
    const result = Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const product = (num1[i] - '0') * (num2[j] - '0');
            const p1 = i + j;
            const p2 = i + j + 1;
            const sum = product + result[p2];

            result[p2] = sum % 10;
            result[p1] += Math.floor(sum / 10);
        }
    }

    while (result.length > 1 && result[0] === 0) {
        result.shift();
    }

    return result.join('');
};