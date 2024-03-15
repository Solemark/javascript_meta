/**
 * reverse an array using another array
 * @param {any[]} a1 
 * @returns {any[]}
 */
const reverseArray = a1 => {
    const a2 = []
    let c = a1.length - 1
    for (let i = 0; i < a1.length; i++) {
        a2.push(a1[c])
        c--
    }
    return a2
}

/**
 * reverse a single array
 * @param {any[]} a1 
 * @returns {any[]}
 */
const reverseSingleArray = a1 => {
    let c = a1.length - 1
    let x = 0
    let y = 0
    for (let i = 0; i <= c; i++) {
        x = a1[i]
        y = a1[c]
        a1[c] = x
        a1[i] = y
        c--
    }
    return a1
}

module.exports = { reverseArray, reverseSingleArray }
