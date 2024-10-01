/**
 * @param {number} a
 * @param {number} max
 * @returns {string[]}
 */
const outputTable = (a, max) => {
    let b = 0
    const arr = []
    while (b <= max) {
        arr.push(`${a} x ${b} = ${a * b}`)
        b++
    }
    return arr
}

module.exports = { outputTable }
