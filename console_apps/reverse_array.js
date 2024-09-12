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
    let x = 0
    let y = 0
    for (let i = 0; i <= c; i++) {
        x = arr[i]
        y = arr[c]
        arr[c] = x
        arr[i] = y
        c--
    }
    return arr
}

module.exports = { reverseArray, reverseSingleArray }
