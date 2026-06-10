"use strict";

var anilDev = new Developer(1, "Anil", 1000, 2000, 3000, 4000);
var sunilHr = new Hr(2, "Sunil", 1500, 2500, 3500, 4500);
var joyDev = new Developer(3, "Joydip", 2000, 3000, 4000, 5000);
var maheshHr = new Hr(4, "Mahesh", 100, 200, 300, 400);
employees.push(anilDev, sunilHr, joyDev, maheshHr);
for (var index = 0; index < employees.length; index++) {
  var e = employees[index];
  e.calculateSalary();
  //console.log(`Total salary of ${e.name} is ${e.total}`);
}

// const salaryCriteria = (e) => e.total > 10000
// const sortCriteria = (e1, e2) => e1.name.localeCompare(e2.name)
// const printLogic = (e) => console.log(`Total salary of ${e.name} is ${e.total}`)

// const filteredEmplyees = employees.filter(salaryCriteria)
// const sortedEmployees = filteredEmplyees.sort(sortCriteria)
// sortedEmployees.forEach(printLogic)

// employees
//     .filter(salaryCriteria)
//     .sort((e1, e2) => e1.name.localeCompare(e2.name))
//     .forEach(printLogic)

employees.filter(function (e) {
  return e.total > 10000;
}).sort(function (e1, e2) {
  return e1.name.localeCompare(e2.name);
}).forEach(function (e) {
  return console.log("Total salary of ".concat(e.name, " is ").concat(e.total));
});
console.log('end of app');
//# sourceMappingURL=index.js.map