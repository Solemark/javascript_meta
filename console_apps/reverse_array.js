/**
 * reverse an array using another array
 * @param {any[]} arr
 * @returns {any[]}
 */
const reverseArray = arr => arr.reverse()

/**
 * reverse a single array
 * @param {any[]} arr
 * @returns {any[]}
 */
const reverseSingleArray = arr => {
    let c = arr.length - 1
    for (const i of Array(c + 1).keys()) {
        const x = arr[i],
            y = arr[c]
        ;[arr[c], arr[i]] = [x, y]
        c--
    }
    return arr
}

module.exports = { reverseArray, reverseSingleArray }
