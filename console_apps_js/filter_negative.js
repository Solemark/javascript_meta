/**
 * remove negative values from an array
 * @param {number[]} a1 
 * @returns {number[]}
 */
const filterNegative = a1 => {
    const a2 = []
    for (let i = 0; i < a1.length; i++) {
        if (a1[i] >= 0) {
            a2.push(a1[i])
        }
    }
    return a2
}

module.exports = { filterNegative }
