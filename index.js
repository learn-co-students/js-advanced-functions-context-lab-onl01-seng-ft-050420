/* Your Code Here */

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
const createEmployeeRecord = info => {
    const record = {
        firstName: info[0],
        familyName: info[1],
        title: info[2],
        payPerHour: info[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return record;
};

const createEmployeeRecords = array => array.map( employee => createEmployeeRecord(employee))

const createTimeInEvent = function(dateStamp){
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0]
        });
    return this
};

const createTimeOutEvent = function(dateStamp) {
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0]
        });
    return this
};

const hoursWorkedOnDate = function(date) {
    let timeIn = this.timeInEvents.find( e => e.date === date)
    let timeOut = this.timeOutEvents.find( e => e.date === date)
    let hours = parseInt(timeOut.hour - timeIn.hour)/100
    return hours
}

const wagesEarnedOnDate = function(date) {
    return parseInt(hoursWorkedOnDate.call(this, date) * this.payPerHour);
};


const findEmployeeByFirstName = (array, firstName) => {
    return array.find(e => e.firstName === firstName)
}

// const calculatePayroll = (array) => {
//     const wages = array.map(e => allWagesFor(e))
//     return wages.reduce( (acc, i) => {
//         acc += i;
//         return acc;
//     }, 0)
// }

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}