/**
 * print even numbers upto max
 * @param {number} max 
 * @returns {string}
 */
const printEvens = max => {
    let output = ''
    for (let i = 0; i <= max; i++) {
        if (i % 2 == 0) {
            output += `${i}\n`
        }
    }
    return output
}

module.exports = { printEvens }
