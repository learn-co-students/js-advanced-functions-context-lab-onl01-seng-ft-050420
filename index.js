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
        return e.date;
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this), 0); // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable;
}

function createEmployeeRecord(array) {
    const employee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    return employee;
}

function createEmployeeRecords(array) {
    return array.map(createEmployeeRecord);
}

function createTimeInEvent(time) {
    const dateTime = time.split(" ")
    const timeObj = {type: "TimeIn", date: dateTime[0], hour: parseInt(dateTime[1], 10)};
    this.timeInEvents.push(timeObj);
    return this;
}

function createTimeOutEvent(time) {
    const dateTime = time.split(" ")
    const timeObj = {type: "TimeOut", date: dateTime[0], hour: parseInt(dateTime[1], 10)};
    this.timeOutEvents.push(timeObj);
    return this;
}

function hoursWorkedOnDate(date) {
    const dateIn = this.timeInEvents.find(x => x.date === date);
    const dateOut = this.timeOutEvents.find(x => x.date === date);
    return (dateOut.hour - dateIn.hour) * 0.01;
}

function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date);
    return hours * this.payPerHour;
}

// function allWagesFor(emp) {
//     // let pay = 0;
//     // for (const day of emp.timeInEvents) {
//     //     pay += wagesEarnedOnDate(emp, day.date);
//     // }
//     // return pay;
//     return emp.timeInEvents.reduce((acc, cur) => acc + wagesEarnedOnDate(emp, cur.date), 0)
// }

function calculatePayroll(emps) {
    return emps.reduce((acc, cur) => acc + allWagesFor.call(cur), 0)
}

function findEmployeeByFirstName(emps, name) {
    return emps.find(x => x.firstName === name);
}
