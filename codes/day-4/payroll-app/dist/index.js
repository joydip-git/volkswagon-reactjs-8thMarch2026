"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _developer = require("./models/developer");
var _hr = require("./models/hr");
var _employees = _interopRequireWildcard(require("./data/employees"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var anilDev = new _developer.Developer(1, "Anil", 1000, 2000, 3000, 4000);
var sunilHr = new _hr.Hr(2, "Sunil", 1500, 2500, 3500, 4500);
var joyDev = new _developer.Developer(3, "Joydip", 2000, 3000, 4000, 5000);
var maheshHr = new _hr.Hr(4, "Mahesh", 100, 200, 300, 400);
(0, _employees.add)(anilDev);
(0, _employees.add)(sunilHr);
(0, _employees.add)(joyDev);
(0, _employees.add)(maheshHr);
for (var index = 0; index < _employees["default"].length; index++) {
  var e = _employees["default"][index];
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

_employees["default"].filter(function (e) {
  return e.total > 10000;
}).sort(function (e1, e2) {
  return e1.name.localeCompare(e2.name);
}).forEach(function (e) {
  return console.log("Total salary of ".concat(e.name, " is ").concat(e.total));
});
console.log('end of app');
//# sourceMappingURL=index.js.map