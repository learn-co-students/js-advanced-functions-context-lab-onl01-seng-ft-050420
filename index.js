/* Your Code Here */

function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arr) {
    return arr.map(el => createEmployeeRecord(el));
}

function createTimeInEvent(dateStamp) {
    const timeInEvent = createTimeEvent(dateStamp, 'TimeIn');
    this.timeInEvents.push(timeInEvent);
    return this;
}

function createTimeOutEvent(dateStamp) {
    const timeOutEvent = createTimeEvent(dateStamp, 'TimeOut');
    this.timeOutEvents.push(timeOutEvent);
    return this;
}

function createTimeEvent(dateStamp, type) {
    const dateStampArr = dateStamp.split(' ');
    return {
        type: type,
        hour: parseInt(dateStampArr[1], 10),
        date: dateStampArr[0]
    };
}

function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(el => el.date === date);
    const timeOutEvent = this.timeOutEvents.find(el => el.date === date);
    return (timeOutEvent.hour - timeInEvent.hour) / 100;
}

function wagesEarnedOnDate(date) {
    return this.payPerHour * hoursWorkedOnDate.call(this, date);
}

function payrollExpense(arr) {
    return arr.reduce(function(memo, i) {
        return memo + allWagesFor(i);
    }, 0)
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(el => el.firstName === firstName);
}

function calculatePayroll(arr) {
    return arr.reduce(function(memo, i) {
        return memo + allWagesFor(i);
    }, 0);
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