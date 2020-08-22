/* Your Code Here */
let createEmployeeRecord = (employeeStat) => {
    return {
    firstName: employeeStat[0],
    familyName: employeeStat[1],
    title: employeeStat[2],
    payPerHour: employeeStat[3],
    timeInEvents: [],
    timeOutEvents: []
}
}
let createEmployeeRecords = (employeeRowData) => {
    return employeeRowData.map((row) => {
        return createEmployeeRecord(row)
    })
}
let createTimeInEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

let createTimeOutEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}
let hoursWorkedOnDate = function(dateWorked){
    let inEvent = this.timeInEvents.find(function(e) {
        return e.date === dateWorked
    })
    let outEvent = this.timeOutEvents.find(function(e){
        return e.date === dateWorked
    })
    return (outEvent.hour - inEvent.hour) /100
}
let wagesEarnedOnDate = function(dateWorked){
    let wage = hoursWorkedOnDate.call(this, dateWorked) * this.payPerHour
    return wage
}
let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}
const findEmployeeByFirstName = (array, firstName) => {
    return array.find(e => e.firstName === firstName)
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}