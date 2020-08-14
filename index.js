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
    let thisTime = dateTimeArray[1]

    const hash = {
        type: 'TimeIn',
        hour: thisTime,
        date: thisDate
    }
    console.log(hash+','+ dateTimeArray)
    this.timeInEvents.push(hash)
    return hash
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
