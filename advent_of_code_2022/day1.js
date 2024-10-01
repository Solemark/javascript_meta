/**
 * Perform day1
 * @param {string[]} data input data
 * @return {string} 
 */
const day1 = data => {
    let totals = [], total = 0
    data.forEach(item => {
        if (item == "") [totals, total] = [[...totals, total], 0]
        else total += Number(item)
    })
    return `Elf ${get_largest([...totals, total])} has the most calories`
}

/**
 * get the (key + 1) for the largest total
 * @param {number[]} totals array of totals of day1
 * @return {number}
 */
const get_largest = totals => {
    let key = 0, total = 0
    totals.forEach((t, k) => {
        if (total < t) [key, total] = [k, t]
    })
    return key + 1
}

module.exports = day1
