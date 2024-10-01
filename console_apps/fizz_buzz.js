/**
 * play's a game of fizzbuzz
 * @param {number} max
 * @param {number} fizz
 * @param {number} buzz
 * @returns {string}
 */
const fizzBuzz = (max, fizz, buzz) => {
    let output = ""
    for (let i = 1; i <= max; i++) {
        if (i % fizz == 0) output += "fizz"
        if (i % buzz == 0) output += "buzz"
        if (output[output.length - 1] != "z") output += i
        output += "\n"
    }
    return output
}

module.exports = { fizzBuzz }
