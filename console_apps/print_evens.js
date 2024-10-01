/**
 * print even numbers upto max
 * @param {number} max
 * @returns {string}
 */
const printEvens = max => {
    let output = ""
    for (const i of Array(max + 1).keys()) {
        if (i % 2 == 0) output += `${i}\n`
    }
    return output
}

module.exports = { printEvens }
