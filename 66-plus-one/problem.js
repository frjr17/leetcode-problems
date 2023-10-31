/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // I used BigInt to so I don't lose precision with bigger numbers.
    return (BigInt(digits.join(""))+1n).toString().split("").map(n=>parseInt(n))
};