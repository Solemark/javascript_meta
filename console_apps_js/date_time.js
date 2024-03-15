/**
 * get the current date and time
 * @returns {string}
 */
const checkTime = () => {
    const date = new Date()
    let output = ''

    output += `day: ${checkDay(date.getDay())}\n`
    output += `date: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}\n`
    output += `time: ${getCurrentTime(date)}`
    return output
}

/**
 * get the current time (hours and minutes)
 * @param {Date} date 
 * @returns {string}
 */
const getCurrentTime = date => {
    let output = ''
    if (date.getHours() > 12) {
        output += date.getHours() - 12
    } else {
        output += date.getHours()
    }
    output += ':' + date.getMinutes()
    return output
}

/**
 * get the current day as a string
 * @param {number} day 
 * @returns {string}
 */
const checkDay = day => {
    let output = ''
    switch (day) {
        case 0:
            output = 'Sunday'
        case 1:
            output = 'Monday'
        case 2:
            output = 'Tuesday'
        case 3:
            output = 'Wednesday'
        case 4:
            output = 'Thursday'
        case 5:
            output = 'Friday'
        case 6:
            output = 'Saturday'
    }
    return output
}

module.exports = { checkTime, getCurrentTime, checkDay }
