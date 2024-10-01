/**
 * sum numbers recursively
 * @param {number} n
 * @param {number} result
 * @returns {number}
 */
const sum = (n, result) => {
    if (n <= 0) return result
    else return sum(n - 1, result + n)
}

/**
 * sum an array of numbers
 * @param {number[]} arr
 * @param {number} n
 * @param {number} result
 * @returns {number}
 */
const sumArray = (arr, n, result) => {
    if (n < 0) return result
    return sumArray(arr, n - 1, result + arr[n])
}

module.exports = { sum, sumArray }
