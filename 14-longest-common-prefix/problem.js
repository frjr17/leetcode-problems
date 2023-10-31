/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = '';

    const strsLength = strs.map(s => s.length);
    let maxStrLength = Math.min(...strsLength);

    for (let i = 0; i < maxStrLength; i++) {
        if (strs.every(str => str[i] === strs[0][i])) {
            prefix += strs[0][i]
        } else {
            break
        }
    }


    return prefix
};

console.log('PREFIX', longestCommonPrefix(["ab", "a"]))


