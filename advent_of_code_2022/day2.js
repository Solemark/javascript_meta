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
 * perform day2
 * @param {string[][]} data 
 * @return {number} 
 */
const day2 = data => {
    let total = 0
    for (let i = 0; i < data.length; i++) {
        total += points[rps[data[i][1]]] + results[`${rps[data[i][0]]}${rps[data[i][1]]}`]
    }
    return total
}

module.exports = day2
