/* Your Code Here */

function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(array) {
    return array.map((element) => createEmployeeRecord(element))
}

function createTimeInEvent(dateStamp) {
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0]
    })
    return this
}

function createTimeOutEvent(dateStamp) { 
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0]
    })
    return this
}

function hoursWorkedOnDate(date) {
    let clockedIn = this.timeInEvents.find(element => element.date === date)
    let clockedOut = this.timeOutEvents.find(element => element.date === date)
    let hours = (clockedOut.hour - clockedIn.hour) / 100
    return hours
}

function wagesEarnedOnDate(date) {
    let payOwed = 0
    let earned = hoursWorkedOnDate.call(this, date)
    return payOwed += earned * this.payPerHour
}

function findEmployeeByFirstName(array, firstName) {
    return array.find(element => element.firstName === firstName)
}

function calculatePayroll(array) {
    return array.reduce((memo, i) => memo + allWagesFor.call(i), 0)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibledateStamps = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibledateStamps.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}