function createEmployeeRecord(ary) {
    return {
        firstName: ary[0],
        familyName: ary[1],
        title: ary[2],
        payPerHour: ary[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arrays) {
    return arrays.map(element =>  createEmployeeRecord(element))
}

function createTimeEvent(type, dateTime){
    const [date, hour] = dateTime.split(' ')
    return { type: type, hour: parseInt(hour, 10), date: date }
}

function createTimeInEvent(dateTime) {
    this.timeInEvents.push(createTimeEvent('TimeIn', dateTime))
    return this
}

function createTimeOutEvent(dateTime) {
    this.timeOutEvents.push(createTimeEvent('TimeOut', dateTime))
    return this
}

function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(element => element.date === date)
    const timeOutEvent = this.timeOutEvents.find(element => element.date === date)
    return (timeOutEvent.hour - timeInEvent.hour) / 100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

function allWagesFor() {
    let callback  =(total, timeEvent) => {
        return total + wagesEarnedOnDate.call(this, timeEvent.date)
    }
    return this.timeOutEvents.reduce(callback.bind(this), 0)
}

function findEmployeeByFirstName(array, fName) {
    return array.find(element => element.firstName = fName)
}

function calculatePayroll(records) {
    return records.reduce(function(memo, record) {
         return memo + allWagesFor.call(record) }, 0)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// let allWagesFor = function () {
//     let eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     let payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }