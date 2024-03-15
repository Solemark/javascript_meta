/**
 * remove spaces from a string
 * @param {string} str 
 * @returns {string}
 */
const removeSpaces = str => {
    str = str.split(' ').join('')
    return str
}

module.exports = { removeSpaces }
