/**
 * Perform day 1 recursively
 * @param {string[]} data input data
 * @param {number[]} totals totals created from input data
 * @param {number} total current counting total
 * @param {number} i current data array key
 * @return {string} 
 */
const day1 = (data, totals = [], total = 0, i = 0) => {
    if (i > data.length - 1) return `Elf ${get_max([...totals, total])} has the most calories`
    if (data[i] == "") [totals, total] = [[...totals, total], 0]
    else total = total + Number(data[i])
    return day1(data, totals, total, i + 1)
}

/**
 * get the (key+1) for the max
 * @param {number[]} totals array of totals of day1
 * @param {number} key key of highest current total
 * @param {number} total current highest total
 * @param {number} k key of next total
 * @return {number}
 */
const get_max = (totals, key = 0, total = 0, k = 0) => {
    if (k > totals.length - 1) return key + 1
    if (total < totals[k]) [key, total] = [k, totals[k]]
    return get_max(totals, key, total, k + 1)
}

module.exports = day1
