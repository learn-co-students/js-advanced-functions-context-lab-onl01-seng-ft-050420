/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
function createEmployeeRecord(info){
    return {
        firstName: info[0],
        familyName: info[1],
        title: info[2],
        payPerHour: info[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords (empArr) {
    return empArr.map(info => createEmployeeRecord(info))
}

function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

function createTimeOutEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this 
}

function hoursWorkedOnDate(dateStamp){
    let hoursIn = this.timeInEvents.find(function(event){
        return event.date === dateStamp
    })

    let hoursOut = this.timeOutEvents.find(function(event){
        return event.date === dateStamp
    })

    return (hoursOut.hour - hoursIn.hour) / 100
}

function wagesEarnedOnDate(dateStamp){
    let pay = hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour
    return pay
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(empObjs){
    //use wages earned on date
    return empObjs.reduce(function(total, record){
        return total + allWagesFor.call(record)
    }, 0)
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(record => record.firstName === firstName)
}