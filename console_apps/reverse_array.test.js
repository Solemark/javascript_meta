const { reverseArray, reverseSingleArray } = require('./reverse_array')

/**
 * data provider for tests
 * @returns {[number[], number[]]}
 */
const getData = () => [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
]

test('reverse array with second array', () => {
    let input = getData()
    input.forEach((item) => {
        expect(reverseArray(item)).toEqual(item.reverse())
    })
})

test('reverse array with single array', () => {
    let input = getData()
    input.forEach((item) => {
        expect(reverseSingleArray(item)).toEqual(item.reverse())
    })
})
