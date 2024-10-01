/**
 * roll until you get a high rarity character in the chosen game
 * @param {string} game
 * @returns {string}
 */
const gachaRoll = game => {
    let rollCount = 0,
        chance = 0,
        pity = 0,
        rarity = ""

    switch (game) {
        case "FGO":
            chance = 100
            pity = 300
            rarity = "5*"
            break
        case "AK":
            chance = 50
            pity = 100
            rarity = "6*"
            break
        case "GI":
            chance = 167
            pity = 90
            rarity = "5*"
            break
    }

    while (true) {
        rollCount++
        let c = Math.floor(Math.random() * chance + 1)
        if (c == 1) return `It took ${rollCount} rolls to get a ${rarity} in ${game}`
        if (rollCount == pity) {
            if (game == "AK" && rollCount > 50) chance++
            return `You hit pity at ${pity} for your ${rarity} on ${game}`
        }
    }
}

module.exports = { gachaRoll }
