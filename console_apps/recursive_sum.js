/**
 * sum numbers recursively
 * @param {number} n 
 * @param {number} result 
 * @returns {number}
 */
const sum = (n, result) => {
    if (n <= 0) {
        return result
    } else {
        result += n
        return sum(n - 1, result)
    }
}

/**
 * sum an array of numbers
 * @param {number[]} arr 
 * @param {number} n 
 * @param {number} result 
 * @returns {number}
 */
const sumArray = (arr, n, result) => {
    if (n < 0) {
        return result
    }
    result += arr[n]
    return sumArray(arr, n - 1, result)
}

module.exports = { sum, sumArray }
