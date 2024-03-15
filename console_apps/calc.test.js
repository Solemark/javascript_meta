const { add, subtract, multiply, divide } = require('./calc')

/**
 * data provider for tests
 * @returns {number[][]}
 */
const getData = () => [
    [5, 5],
    [5, -5],
    [-5, -5],
]

test('add y to x', () => {
    let data = getData()
    data.forEach((item) => {
        expect(add(item[0], item[1])).toBe(item[0] + item[1])
    })
})

test('subract y from x', () => {
    let data = getData()
    data.forEach((item) => {
        expect(subtract(item[0], item[1])).toBe(item[0] - item[1])
    })
})

test('multiply x by y', () => {
    let data = getData()
    data.forEach((item) => {
        expect(multiply(item[0], item[1])).toBe(item[0] * item[1])
    })
})

test('divide y by x', () => {
    let data = getData()
    data.forEach((item) => {
        expect(divide(item[0], item[1])).toBe(item[0] / item[1])
    })
})
