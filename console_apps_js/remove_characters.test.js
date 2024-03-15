const { removeCharacters } = require('./remove_characters')

test('remove select characters from string', () => {
    const s = 'Hello! My name is Mason'
    const letters = ['m', '!', ' ']
    expect(removeCharacters(s, letters)).toEqual('Helloynaeisason')
})
