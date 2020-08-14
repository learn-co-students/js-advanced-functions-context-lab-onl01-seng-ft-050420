function createEmployeeRecord(empArray){
    const hash = {
        firstName: empArray[0],
        familyName: empArray[1],
        title: empArray[2],
        payPerHour: empArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return hash
}

function createEmployeeRecords(empArray){
    let newArray = empArray.map(x => createEmployeeRecord(x))
    return newArray
}

function createTimeInEvent(dateTime){
    let dateTimeArray = dateTime.split(' ')
    let thisDate = dateTimeArray[0]
    let thisTime = parseInt(dateTimeArray[1])

    const hash = {
        type: 'TimeIn',
        hour: thisTime,
        date: thisDate
    }
    this.timeInEvents.push(hash)
    return this
}

function createTimeOutEvent(dateTime){
    let dateTimeArray = dateTime.split(' ')
    let thisDate = dateTimeArray[0]
    let thisTime = parseInt(dateTimeArray[1])

    const hash = {
        type: 'TimeOut',
        hour: thisTime,
        date: thisDate
    }

    this.timeOutEvents.push(hash)
    return this
}

function hoursWorkedOnDate(date){
    let hourIn = this.timeInEvents.find(x => x.date === date).hour
    let hourOut = this.timeOutEvents.find(x => x.date === date).hour
    let hoursWorked = (hourOut - hourIn) / 100

    return hoursWorked
}

function wagesEarnedOnDate(date){
    const hoursWorked = hoursWorkedOnDate.bind(this)(date)
    const pay = hoursWorked * this.payPerHour
    return pay
}

function findEmployeeByFirstName(empArray, name){
    let emp = empArray.find(x => x.firstName === name)
    return emp
}

function calculatePayroll(empArray){
    let total = empArray.reduce((col, emp) => {
        return col + allWagesFor.bind(emp)()
    }, 0)
    return total
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
