const { sumArray } = require('./sum_array')

/**
 * data provider for tests
 * @returns {[[number[]], number[]]}
 */
const getData = () => [
    [
        [1, 2, 3, 4, 5],
        [-5, -12, 23, 62, -100, 71],
    ],
    [15, 39],
]

test('Sum an array', () => {
    let [input, result] = getData()
    for (let i = 0; i < input.length; i++) {
        expect(sumArray(input[i])).toEqual(result[i])
    }
})
