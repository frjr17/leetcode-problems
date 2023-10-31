/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

    let formatted = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()

    if (!formatted.trim()) return true

    if (formatted === formatted.split("").reverse().join("")) {
        return true
    } else {
        return false
    }
};