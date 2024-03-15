/**
 * remove letters array from a string
 * @param {string} str 
 * @param {string[]} letters 
 * @returns {string}
 */
const removeCharacters = (str, letters) => {
    letters.forEach(letter => {
        str = str.replace(new RegExp(letter, 'gi'), '')
    })
    return str
}

module.exports = { removeCharacters }
