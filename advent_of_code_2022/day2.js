/** Map input values to game value */
const rps = {
    A: "Rock",
    B: "Paper",
    C: "Scissors",
    X: "Rock",
    Y: "Paper",
    Z: "Scissors",
}

/** Map game value to points */
const points = {
    Rock: 1,
    Paper: 2,
    Scissors: 3,
    Loss: 0,
    Draw: 3,
    Win: 6,
}

/** Map of possible results for game */
const results = {
    RockPaper: points["Win"],
    RockRock: points["Draw"],
    RockScissors: points["Loss"],
    PaperScissors: points["Win"],
    PaperPaper: points["Draw"],
    PaperRock: points["Loss"],
    ScissorsRock: points["Win"],
    ScissorsScissors: points["Draw"],
    ScissorsPaper: points["Loss"],
}

/**
 * perform day2 recursively
 * @param {string[][]} data 
 * @param {number} i 
 * @param {number} total 
 * @return {number} 
 */
const day2 = (data, i = 0, total = 0) => {
    if (data.length - 1 < i) return total
    const round = points[rps[data[i][1]]] + results[`${rps[data[i][0]]}${rps[data[i][1]]}`]
    return day2(data, i + 1, total + round)
}

module.exports = day2
