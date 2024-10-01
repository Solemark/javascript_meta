/**
 * check if a string is a palindrome
 * @param {string} str
 * @returns {string}
 */
const checkPalindrome = str => {
    let x = 0,
        y = str.length - 1
    while (x < y) {
        if (str[x] != str[y]) return false
        ;[x, y] = [x + 1, y - 1]
    }
    return true
}

module.exports = { checkPalindrome }
