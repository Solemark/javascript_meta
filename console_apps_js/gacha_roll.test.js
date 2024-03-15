const { gachaRoll } = require('./gacha_roll')

/**
 * data provider for tests
 * @returns {string[]}
 */
const getData = () => ['FGO', 'AK', 'GI']

test('Check the roll succeeded', () => {
    let data = getData()
    data.forEach((game) => {
        expect(gachaRoll(game)).toContain(game)
    })
})
