/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
function createEmployeeRecord(employeeRecord) {
    const newRecord = {
        firstName: employeeRecord[0],
        familyName: employeeRecord[1],
        title: employeeRecord[2],
        payPerHour: employeeRecord[3], 
        timeInEvents: [],
        timeOutEvents: []
    }
    return Object.assign( {}, newRecord )
}

function createEmployeeRecords(records) {
   return records.map( e => createEmployeeRecord(e) )
}
function createTimeInEvent(dateStamp) {
    const dateArray = dateStamp.split(' ')
    const newDate = dateArray[0]
    const hour = parseInt(dateArray[dateArray.length - 1], 10)

    const timeIn = {
        type: "TimeIn", 
        hour: hour, 
        date: newDate
    }
    this.timeInEvents.push( timeIn  )

    return this

} 

function createTimeOutEvent(dateStamp) {

    const [newDate, hour] = dateStamp.split(' ')

    const timeOut = {
        type: "TimeOut", 
        hour: parseInt(hour, 10),
        date: newDate
    }

    this.timeOutEvents.push( timeOut )

    return this 

} 

function hoursWorkedOnDate(dateWorked) {
    const dateIndex = this.timeInEvents.findIndex( e => e.date === dateWorked )
    const punchedInTime = this.timeInEvents[dateIndex].hour
    const punchedOutTime = this.timeOutEvents[dateIndex].hour
    return parseInt( ( removeDoubleZeros(punchedOutTime) - removeDoubleZeros(punchedInTime) ), 10)
} 

function wagesEarnedOnDate(dateWorked) {
    const hoursWorked = hoursWorkedOnDate.call(this, dateWorked)
    
    return hoursWorked * this.payPerHour
} 

// function allWagesFor(employeeRecord) {
//    const wagesArray = employeeRecord.timeInEvents.map( e => {
//         return wagesEarnedOnDate(employeeRecord, e.date)
//     })
//     return wagesArray.reduce( (a, c) => a + c ) 
    
// } 

function findEmployeeByFirstName(allEmployeeArray, firstName) {
    return allEmployeeArray.find( e => e.firstName === firstName )
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.map(e => allWagesFor.call(e)).reduce( (a, c) => a + c )
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

function removeDoubleZeros(num) {
    return num.toString().replace( "00", "")
}