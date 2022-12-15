/* Your Code Here */

function createEmployeeRecord(array){
    const records ={
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return records
}

function createEmployeeRecords(array){
    let newArr = []
    array.forEach(arr=>{
        newArr.push(createEmployeeRecord(arr))
    })
    return newArr
}

function createTimeInEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')
  
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
  
    return this
}

function createTimeOutEvent(Dataval)
{
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(Dataval.slice(-4)),
        date: Dataval.slice(0, 10)
    })
    return this
}

function hoursWorkedOnDate(Datainquiry)
{
    let InTime = this.timeInEvents.find(function(e){
        return e.date === Datainquiry
    })

    let OutTime = this.timeOutEvents.find(function(e){
        return e.date === Datainquiry
    })

    return (OutTime.hour - InTime.hour) / 100
}

function wagesEarnedOnDate(dateSought){
    let rawWage = hoursWorkedOnDate.call(this, dateSought)
        * this.payPerHour
    return parseFloat(rawWage.toString())
  }
  
  
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(function(rec){
    return rec.firstName === firstName
    })
}

function wagesEarnedOnDate(Datainquiry)
{
    const Payunpaid = hoursWorkedOnDate(this, Datainquiry)* this.payPerHour
    return parseFloat(Payunpaid.toString())
}

function calculatePayroll (arrayofObject)
{
    let sum=0;
    for (let i=0;i<arrayofObject.length;i++) {
        sum += allWagesFor.call(arrayofObject[i]);
      }
    return sum
}
function findEmployeeByFirstName(Array, firstName) {
    return Array.find((Person) => Person.firstName === firstName )
}

  function wagesEarnedOnDate(date = "all") {
    return this.payPerHour * hoursWorkedOnDate.call(this, date);
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


