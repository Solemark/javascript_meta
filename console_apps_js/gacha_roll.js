/**
 * roll until you get a high rarity character in the chosen game
 * @param {string} game 
 * @returns {string}
 */
const gachaRoll = game => {
    let rollCount = 0
    let c = 0
    let chance = 0
    let pity = 0
    let rarity = ''
    let output = ''

    if (game == 'FGO') {
        chance = 100
        pity = 300
        rarity = '5*'
    }
    if (game == 'AK') {
        chance = 50
        pity = 100
        rarity = '6*'
    }
    if (game == 'GI') {
        chance = 167
        pity = 90
        rarity = '5*'
    }

    while (true) {
        rollCount++
        c = Math.floor(Math.random() * chance + 1)
        if (c == 1) {
            output = `It took ${rollCount} rolls to get a ${rarity} in ${game}`
            break
        }
        if (rollCount == pity) {
            if (game == 'AK' && rollCount > 50) {
                chance++
            }
            output = `You hit pity at ${pity} for your ${rarity} on ${game}`
            break
        }
    }
    return output
}

module.exports = { gachaRoll }
