/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    try {
        return new RegExp("^" + p + "$").test(s)
    } catch (e) {
        return true
    }
};