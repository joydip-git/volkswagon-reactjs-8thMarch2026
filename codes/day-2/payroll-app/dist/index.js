"use strict";

var anilDev = new Developer(1, "Anil", 1000, 2000, 3000, 4000);
var sunilHr = new Hr(2, "Sunil", 1500, 2500, 3500, 4500);
employees.push(anilDev, sunilHr);
for (var index = 0; index < employees.length; index++) {
  var e = employees[index];
  e.calculateSalary();
  console.log("Total salary of ".concat(e.name, " is ").concat(e.total));
}
//# sourceMappingURL=index.js.map