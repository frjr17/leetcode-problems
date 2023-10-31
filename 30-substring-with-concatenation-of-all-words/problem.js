/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    if (s.length === 0 || words.length === 0) {
        return [];
    }

    const wordLength = words[0].length;
    const totalWordLength = wordLength * words.length;
    const wordCountMap = {};

    for (const word of words) {
        if (wordCountMap[word]) {
            wordCountMap[word]++;
        } else {
            wordCountMap[word] = 1;
        }
    }

    const result = [];

    for (let i = 0; i < wordLength; i++) {
        let left = i;
        let right = i;
        let window = {};

        while (right + wordLength <= s.length) {
            const currentWord = s.slice(right, right + wordLength);
            right += wordLength;

            if (wordCountMap[currentWord]) {
                if (window[currentWord]) {
                    window[currentWord]++;
                } else {
                    window[currentWord] = 1;
                }

                while (window[currentWord] > wordCountMap[currentWord]) {
                    const leftWord = s.slice(left, left + wordLength);
                    left += wordLength;
                    window[leftWord]--;
                }

                if (right - left === totalWordLength) {
                    result.push(left);
                }
            } else {
                window = {};
                left = right;
            }
        }
    }

    return result;
};