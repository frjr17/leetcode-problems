/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    return (BigInt('0b'+b)+BigInt('0b'+a)).toString(2)
};