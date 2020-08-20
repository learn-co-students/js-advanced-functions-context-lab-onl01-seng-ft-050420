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
};


// Your code here
function createEmployeeRecord(infoArr){
    return {firstName: infoArr[0], 
        familyName: infoArr[1], 
        title: infoArr[2], 
        payPerHour: infoArr[3], 
        timeInEvents: [],
        timeOutEvents: []
    };
    

};

function createEmployeeRecords(arrOfArr){
    return arrOfArr.map(createEmployeeRecord);
};

function createTimeInEvent(dateAndTime){
    
    let dateAndHour=dateAndTime.split(' ');
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateAndHour[1]),
        date: dateAndHour[0]
    });
    
    return this
};

function createTimeOutEvent(time){
    let dateAndHour = time.split(' ');
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateAndHour[1]),
        date: dateAndHour[0]
    });
    return this
};

function hoursWorkedOnDate(date) {
    let objTimeIn = this.timeInEvents.find(d => d.date === date )
    let objTimeOut = this.timeOutEvents.find(d => d.date === date )
    let hoursWorked = objTimeOut.hour - objTimeIn.hour;
    return hoursWorked/100
    
  };

function wagesEarnedOnDate(date) {
    const totalHours = hoursWorkedOnDate.call(this,date) ;
    return totalHours * this.payPerHour;
};

function findEmployeeByFirstName(arrRecords, firstName ){
    return arrRecords.find(elem => elem.firstName === firstName)
 };

/*function allWagesFor(){
    let allDates = this.timeInEvents.map(function(eachDate){
        return eachDate.date
    });
   
    let payable = allDates.reduce(function(total, d){
        
        return total + wagesEarnedOnDate(this, d) }.bind(this), 0
    );
    
    return payable
};*/

function findEmployeeByFirstName(arrRecords, firstName ){
    return arrRecords.find(elem => elem.firstName === firstName)
 };

function calculatePayroll(arrRecords){
    //return arrRecords.reduce((total, r) => total + allWagesFor(r), 0)
    return arrRecords.map(r => allWagesFor(r)).reduce((total, p)=> total + p);
};

