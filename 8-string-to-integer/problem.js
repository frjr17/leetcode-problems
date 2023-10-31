/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let str = s.trim().split(" ").map((sPart, i) => {
        let part = parseInt(sPart)

        if (!part) {
            return 0
        }

        return Math.min(Math.max(part, Math.pow(2, 31) * -1), Math.pow(2, 31) - 1)
    })

    return str[0]
};