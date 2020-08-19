/* Your Code Here */
function createEmployeeRecord(arr){
    let employee = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    return employee;
};

function createEmployeeRecords(arr){
    let employees = arr.map(e => createEmployeeRecord(e))
    return employees;
};

function createTimeInEvent(dateStamp){
    let [date , time] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(time),
        date: date,
    })

    return this 
}

function createTimeOutEvent(dateStamp){
    let [date , time] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(time),
        date: date,
    })

    return this
}

function hoursWorkedOnDate(dateStamp){
    let timeIn = this.timeInEvents.find(day => day.date === dateStamp)
    let hourIn = timeIn.hour
    
    let timeOut = this.timeOutEvents.find(day => day.date === dateStamp)
    let hourOut = timeOut.hour

    const hours = (hourOut - hourIn) / 100
    return hours 
}

function wagesEarnedOnDate(dateStamp){
    return hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour
}

function allWagesFor() {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray,firstName){
    return srcArray.find(function(employee){
       return employee.firstName === firstName
    })
}

function calculatePayroll(arr){
    return arr.reduce(function(acc,total){
        return acc + allWagesFor.call(total)
    }, 0)
}