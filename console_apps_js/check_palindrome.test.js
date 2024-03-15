const { checkPalindrome } = require("./check_palindrome")

/**
 * data provider for tests
 * @returns {[string[], bool[]]}
 */
const getData = () => [
    ['DAD', 'Dad', 'ABCDCBA', 'ABCDcba'],
    [true, false, true, false],
]

test('check if is palindrome', () => {
    let [input, result] = getData()
    for (let i = 0; i < input.length; i++) {
        expect(checkPalindrome(input[i])).toBe(result[i])
    }
})
