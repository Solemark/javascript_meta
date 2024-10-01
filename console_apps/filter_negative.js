/**
 * remove negative values from an array
 * @param {number[]} arr
 * @returns {number[]}
 */
const filterNegative = arr => arr.filter(i => i >= 0)

module.exports = { filterNegative }
