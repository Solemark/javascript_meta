const { checkTime, getCurrentTime, checkDay } = require('./date_time')

test('get current datetime', () => {
    const date = new Date()
    let output = ''
    output += `day: ${checkDay(date.getDay())}\n`
    output += `date: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}\n`
    output += `time: ${getCurrentTime(date)}`
    expect(checkTime())
        .toBe(output)
})
