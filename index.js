function createEmployeeRecord(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  }
}

function createEmployeeRecords(array) {
  return array.map((employee) => createEmployeeRecord(employee))
}

function createTimeInEvent(dateStamp) {
  const timeArray = dateStamp.split(' ')
  this.timeInEvents.push({
    type: 'TimeIn',
    hour: parseInt(timeArray[1]),
    date: timeArray[0],
  })
  return this
}

function createTimeOutEvent(dateStamp) {
  const timeArray = dateStamp.split(' ')
  this.timeOutEvents.push({
    type: 'TimeOut',
    hour: parseInt(timeArray[1]),
    date: timeArray[0],
  })
  return this
}

function hoursWorkedOnDate(date) {
  const timeInEvent = this.timeInEvents.find((event) => event.date === date)
  const timeOutEvent = this.timeOutEvents.find((event) => event.date === date)
  return (timeOutEvent.hour - timeInEvent.hour) / 100
}

function wagesEarnedOnDate(date) {
  const hoursWorked = hoursWorkedOnDate.call(this, date)
  const payPerHour = this.payPerHour
  return hoursWorked * payPerHour
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

  let payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this),
    0,
  ) // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable
}

function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find((employee) => employee.firstName === firstName)
}

function calculatePayroll(srcArray) {
  return srcArray.reduce(function (acc, curr) {
    return acc + allWagesFor.call(curr)
  }, 0)
}
