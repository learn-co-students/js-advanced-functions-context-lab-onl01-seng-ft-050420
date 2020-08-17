/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 function createEmployeeRecord(record) {
   return {
     firstName: record[0],
     familyName: record[1],
     title: record[2],
     payPerHour: record[3],
     timeInEvents: [],
     timeOutEvents: []
   }
 }

 function createEmployeeRecords(arrayOfArrays) {
   return arrayOfArrays.map(record => createEmployeeRecord(record))
 }

 function createTimeEvent(type, dateTimeStamp) {
   const [date, time] = dateTimeStamp.split(' ')
   return { type: type, hour: parseInt(time, 10), date: date }
 }

 function createTimeInEvent(dateTimeStamp) {
   this.timeInEvents.push(createTimeEvent('TimeIn', dateTimeStamp))
   return this
 }

 function createTimeOutEvent(dateTimeStamp) {
   this.timeOutEvents.push(createTimeEvent('TimeOut', dateTimeStamp))
   return this
 }

 function createTimeOutEvent(dateTimeStamp) {
   this.timeOutEvents.push(createTimeEvent('TimeOut', dateTimeStamp))
   return this
 }

 function hoursWorkedOnDate(dateStamp) {
   const timeIn = this.timeInEvents.find(e => e.date === dateStamp)
   const timeOut = this.timeOutEvents.find(e => e.date === dateStamp)
   return (timeOut.hour - timeIn.hour) / 100
 }

 function wagesEarnedOnDate(dateStamp) {
   return hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour
 }

 function allWagesFor() {
   let callback = (total, timeEvent) => {
     return total + wagesEarnedOnDate.call(this, timeEvent.date)
   }
   return this.timeOutEvents.reduce(callback.bind(this), 0)
 }

 function findEmployeeByFirstName(array, firstName) {
   return array.find(record => record.firstName === firstName)
 }

 function calculatePayroll(records) {
   return records.reduce((total, record) => total + allWagesFor.call(record), 0)
 }
