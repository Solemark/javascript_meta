/**
 * check if a string is a palindrome
 * @param {string} str 
 * @returns {string}
 */
const checkPalindrome = str => {
    let x = 0
    let y = str.length - 1
    let output = true
    if (typeof str === 'string') {
        while (x < y) {
            if (str[x] != str[y]) {
                output = false
                break
            }
            x++
            y--
        }
    } else {
        output = false
    }
    return output
}

module.exports = { checkPalindrome }
