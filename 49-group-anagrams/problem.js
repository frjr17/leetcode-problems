/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const anagramGroups = {};

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');

        if (anagramGroups[sortedStr]) {
            anagramGroups[sortedStr].push(str);
        } else {
            anagramGroups[sortedStr] = [str];
        }
    }

    return Object.values(anagramGroups);
};